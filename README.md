# عُقَد — Uqad

A personal Fajr wake-up web app for iPhone. It turns this hadith into three quests, one per knot:

> يَعقِدُ الشَّيطانُ على قافيةِ رَأسِ أحَدِكُم إذا هو نامَ ثَلاثَ عُقدٍ، يَضرِبُ كُلَّ عُقدةٍ: عليك لَيلٌ طَويلٌ فارقُدْ، فإنِ استَيقَظَ فذَكَرَ اللهَ انحَلَّت عُقدةٌ، فإن تَوضَّأ انحَلَّت عُقدةٌ، فإن صَلَّى انحَلَّت عُقدةٌ، فأصبَحَ نَشيطًا طَيِّبَ النَّفسِ، وإلَّا أصبَحَ خَبيثَ النَّفسِ كَسلانَ.
>
> متفق عليه — البخاري ١١٤٢، مسلم ٧٧٦

| Knot | Action | Window | "تم" unlocks after | Sound |
|---|---|---|---|---|
| 1 | Dhikr on waking | 10 min | immediately | Soft looping alarm until "تم" |
| 2 | Wudu | 10 min | 90 s | Silent |
| 3 | Salah | 30 min | 4 min | Silent |

Each window starts when the previous knot is done. If a window runs out, the day is logged as **failed**.

Plain static files (no framework, no build step): `index.html`, `manifest.webmanifest`, `sw.js`, `icons/`, `fonts/`.

---

## 1. Publish on GitHub Pages

1. Push this repo to GitHub (it is `RJverse/Uqad`).
2. **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*, Branch = `main`, Folder = `/ (root)` → **Save**.
3. After about a minute the app is live at **`https://rjverse.github.io/Uqad/`**. All paths are relative (`./`), so it works under any sub-path.

## 2. Install on the iPhone

1. Open the URL in **Safari** → Share → **Add to Home Screen**. The name is pre-filled as «عُقَد».
2. Open it once from the Home Screen while online, so the service worker caches everything for offline use.

> The app's data (today's session, streak, history) lives in the installed app's local storage. The Home Screen app and a Safari tab keep **separate** storage, so always use the same one. The Shortcut below opens the Home Screen app.

## 3. Shortcuts (exact names)

The app calls two Shortcuts by name, and only when you tap a button. Create both in the Shortcuts app with **exactly** these names (case and space matter):

| Shortcut name | Called from | Suggested actions |
|---|---|---|
| `Uqad Done` | Success screen → «افتح الجوال» | Turn off your Fajr Focus / Downtime, open your usual morning app, etc. |
| `Uqad Fail` | Failed screen → «افتح الجوال», and the Emergency confirm | Same unlock steps, plus anything you want on a missed morning. |

The app opens them with `shortcuts://run-shortcut?name=Uqad%20Done` / `…Uqad%20Fail`. You can change the names in `CONFIG.shortcuts` at the top of the script in `index.html`.

### Automation: open the app when the Fajr alarm stops

Shortcuts → **Automation** → **+** → **Alarm** → choose your Fajr alarm → **Is Stopped** → *Run Immediately*. Then add the action **Open URLs** with:

```
https://rjverse.github.io/Uqad/?start=1
```

- `?start=1` starts today's session **only if today has no session yet** (local date, Asia/Riyadh). If one exists, running or finished, it just resumes, so a second alarm can never reset a finished day.
- The first screen is one big «استيقظ» button. iOS only allows sound after a tap, so this tap starts knot 1 and its alarm tone. Knot 1's 10-minute window is already counting from the moment the Shortcut opened the app.

If Safari opens instead of the installed app, it's fine for a quick test, but keep using one of them consistently (see the storage note above).

## 4. Test mode

Add `?test=1` to any URL:

| URL | What it does |
|---|---|
| `…/Uqad/?test=1&start=1` | Starts a test session: windows **20 s / 20 s / 40 s**, «تم» unlocks after **5 s** (knot 1 stays at 0 s) |
| `…/Uqad/?test=1` | Shows the current test state or the test home |

- A «وضع التجربة» badge shows on every screen.
- Test sessions and history are stored **separately** from real ones, so they never touch your real streak.
- The test home has «ابدأ تجربة جديدة» to wipe today's trial and start over, and «الخروج من وضع التجربة» to go back to the real app.
- The normal home screen links to test mode at the bottom.

## 5. Screens

| Screen | When |
|---|---|
| Tap-to-begin («استيقظ») | A session just started, or knot 1 is still running after a reload (the alarm needs a fresh tap) |
| Knot 1–3 | Illustration plus countdown ring, the hadith segment (and the dhikr on knot 1), «الحديث كاملاً», a big «تم» button that stays disabled during the minimum time, and a quiet «طوارئ» link |
| Success | Last knot unties, the figure stands, dawn glow → «افتح الجوال» runs `Uqad Done` |
| Failed | Knots stay tied, the figure stays slumped, dim sky → «افتح الجوال» runs `Uqad Fail` |
| Emergency | «طوارئ» → confirm → logged as *emergency* (neutral: neither counts toward nor breaks the streak) → runs `Uqad Fail` |
| Home | Today's result, current streak, 30-day grid (success / failed / emergency / none) |

## 6. How it works

- **State machine:** `IDLE → KNOT1 → KNOT2 → KNOT3 → SUCCESS`, and any knot can end in `FAILED` (deadline passed) or `EMERGENCY`.
- **Timestamps, not timers:** the session stores absolute `startedAt` / `deadline` in `localStorage`. On every load, `visibilitychange`, and 250 ms tick, the state is recomputed from those timestamps, so killing the app, locking the phone, or reloading never loses time or resets a knot.
- **Config:** every duration, the test values, Shortcut names, and the time zone live in the `CONFIG` object at the top of the script in `index.html`.
- **Alarm:** generated with the Web Audio API (gentle rising three-note chime, slowly getting louder, looping). No audio files. `navigator.audioSession.type = 'playback'` is set first where supported, so it can sound with the ringer switch on silent.
- **Screen Wake Lock** while a knot is active (re-acquired on return), **haptics** via `navigator.vibrate` where available (iOS ignores it, which is fine).
- **Storage safety:** every `localStorage` read and write is wrapped. Corrupt or missing data falls back to an empty state.
- **Offline:** `sw.js` caches the app shell and fonts cache-first. **When you change any file, bump `VERSION` in `sw.js`** (for example `uqad-v2`) so phones pick up the new version. Old caches are deleted on activate.

## 7. Design

Built on the **RJverse design system** (`RJverse-Design-System/`):

- **Colors:** Midnight Navy `#0B1C3D` base, RJ Blue scale for the knots, ring and primary buttons, dark-mode semantic tokens. The sky moves from night → Blue-800 → Blue-700/Indigo → dawn. The success horizon adds a soft warm glow from the system's warning amber, kept at low opacity. Failure stays dim and desaturated.
- **Type** (per the design system README, self-hosted and subset to woff2 in `fonts/`): **Cairo** for display, headlines and the hadith text, **Tajawal** for subheadings and labels, **Changa** for body text. Fallbacks are SF Arabic / Geeza Pro / Noto Arabic.
- Pill CTAs with the RJ glow shadow, 18 px card radius, 4 px spacing scale, navy-tinted shadows. No emoji in the UI.
- Dark only, RTL, safe-area padding, no sideways scroll. `prefers-reduced-motion` swaps the untie motion for simple fades.

## 8. Maintenance

```bash
# regenerate icons (Pillow)
pip install pillow && python3 tools/make_icons.py

# regenerate the subset fonts from RJverse-Design-System/fonts (fonttools + brotli)
pip install fonttools brotli && bash tools/make_fonts.sh

# self-test: every screen at 390×844 in test mode, plus text-fidelity, overflow,
# reload/timer, no-restart and corrupt-storage checks. Screenshots go to docs/screenshots/
python3 -m http.server 8765 &
npm i playwright && node tools/selftest.mjs
```
