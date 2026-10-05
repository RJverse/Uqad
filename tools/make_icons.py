"""Generate the عُقَد app icons as real PNGs.

Three knots on a hanging cord, RJverse Midnight Navy background, RJ Blue / Sky Blue
accents (colors from RJverse-Design-System/colors_and_type.css). No text.
Drawn at 4x and downsampled for clean anti-aliasing.

    python3 tools/make_icons.py
"""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

MIDNIGHT = (0x0B, 0x1C, 0x3D)   # --rj-midnight
BLUE_800 = (0x23, 0x2E, 0x8C)   # --rj-blue-800
BLUE_500 = (0x54, 0x65, 0xFF)   # --rj-blue-500
SKY = (0x9B, 0xB1, 0xFF)        # --rj-sky-blue

OUT = Path(__file__).resolve().parent.parent / "icons"
SS = 4  # supersample factor


def bezier(p0, p1, p2, n=64):
    pts = []
    for i in range(n + 1):
        t = i / n
        x = (1 - t) ** 2 * p0[0] + 2 * (1 - t) * t * p1[0] + t ** 2 * p2[0]
        y = (1 - t) ** 2 * p0[1] + 2 * (1 - t) * t * p1[1] + t ** 2 * p2[1]
        pts.append((x, y))
    return pts


def thick_line(d, pts, width, fill):
    """Stamp discs along the path: smooth round caps/joins, no PIL line seams."""
    r = width / 2
    dense = []
    for (x0, y0), (x1, y1) in zip(pts, pts[1:]):
        steps = max(1, int(((x1 - x0) ** 2 + (y1 - y0) ** 2) ** 0.5 / (r * 0.25)))
        for i in range(steps):
            t = i / steps
            dense.append((x0 + (x1 - x0) * t, y0 + (y1 - y0) * t))
    dense.append(pts[-1])
    for x, y in dense:
        d.ellipse([x - r, y - r, x + r, y + r], fill=fill)


def render(size):
    S = size * SS
    img = Image.new("RGB", (S, S), MIDNIGHT)

    # Soft Blue-800 glow behind the cord (one blob, per the design system)
    glow = Image.new("RGB", (S, S), MIDNIGHT)
    gd = ImageDraw.Draw(glow)
    gd.ellipse([S * 0.18, S * 0.1, S * 0.82, S * 0.9], fill=BLUE_800)
    glow = glow.filter(ImageFilter.GaussianBlur(S * 0.14))
    img = Image.blend(img, glow, 0.9)

    d = ImageDraw.Draw(img)
    rope_w = S * 0.06
    cx = S * 0.5

    # Cord: hangs top to bottom with a soft S-curve
    top = bezier((cx + S * 0.05, -S * 0.05), (cx - S * 0.12, S * 0.5), (cx + S * 0.04, S * 1.05), 240)
    thick_line(d, top, rope_w, SKY)

    def cord_x(y):
        return min(top, key=lambda p: abs(p[1] - y))[0]

    for y in (S * 0.24, S * 0.5, S * 0.76):
        x = cord_x(y)
        rx, ry = S * 0.15, S * 0.095
        # knot body
        d.ellipse([x - rx, y - ry, x + rx, y + ry], fill=BLUE_500)
        # two wraps crossing the knot, so it reads as tied rope
        w = S * 0.034
        for off in (-0.42, 0.42):
            wrap = bezier((x - rx * 0.78 + rx * off * 0.5, y + ry * 0.7),
                          (x + rx * off * 0.6, y),
                          (x + rx * 0.78 + rx * off * 0.5, y - ry * 0.7), 40)
            thick_line(d, wrap, w, SKY)

    return img.resize((size, size), Image.LANCZOS)


def main():
    OUT.mkdir(exist_ok=True)
    for name, size in (("apple-touch-icon.png", 180), ("icon-192.png", 192), ("icon-512.png", 512)):
        render(size).save(OUT / name, optimize=True)
        print("wrote", OUT / name)


if __name__ == "__main__":
    main()
