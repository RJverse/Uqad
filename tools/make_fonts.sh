#!/usr/bin/env bash
# Subset the RJverse Arabic brand fonts (Cairo, Changa, Tajawal) to woff2 for the app.
# Source: RJverse-Design-System/fonts/. Requires: pip install fonttools brotli
set -euo pipefail
cd "$(dirname "$0")/.."
DS=RJverse-Design-System/fonts
OUT=fonts
TMP=$(mktemp -d)
mkdir -p "$OUT"
U="U+0020-007E,U+00A0,U+00AB,U+00BB,U+00D7,U+0600-06FF,U+0750-077F,U+08A0-08FF,U+200C-200F,U+2010-2027,U+2066-2069,U+2212,U+FB50-FDFF,U+FE70-FEFF"

python3 -m fontTools.varLib.instancer "$DS/Cairo-VariableFont_slnt_wght.ttf" slnt=0 wght=400:800 -o "$TMP/cairo.ttf" -q
pyftsubset "$TMP/cairo.ttf" --unicodes="$U" --layout-features='*' --flavor=woff2 --output-file="$OUT/Cairo-Var.woff2"

python3 -m fontTools.varLib.instancer "$DS/Changa-VariableFont_wght.ttf" wght=300:600 -o "$TMP/changa.ttf" -q
pyftsubset "$TMP/changa.ttf" --unicodes="$U" --layout-features='*' --flavor=woff2 --output-file="$OUT/Changa-Var.woff2"

for w in Medium Bold; do
  pyftsubset "$DS/Tajawal-$w.ttf" --unicodes="$U" --layout-features='*' --flavor=woff2 --output-file="$OUT/Tajawal-$w.woff2"
done
rm -rf "$TMP"
ls -l "$OUT"
