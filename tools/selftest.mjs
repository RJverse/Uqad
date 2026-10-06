// Self-test for عُقَد: walks every screen in test mode at 390×844, saves screenshots,
// and checks text fidelity, overflow, timer persistence, and the no-restart rule.
//
//   python3 -m http.server 8765 &              (from the repo root)
//   npm i playwright && node tools/selftest.mjs
//
// Env: BASE (default http://localhost:8765/), OUT (default docs/screenshots), CHROMIUM (executable path).
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const BASE = process.env.BASE || 'http://localhost:8765/';
const OUT = process.env.OUT || 'docs/screenshots';
mkdirSync(OUT, { recursive: true });

// Reference text, copied verbatim from the spec.
const REF = {
  full: 'يَعقِدُ الشَّيطانُ على قافيةِ رَأسِ أحَدِكُم إذا هو نامَ ثَلاثَ عُقدٍ، يَضرِبُ كُلَّ عُقدةٍ: عليك لَيلٌ طَويلٌ فارقُدْ، فإنِ استَيقَظَ فذَكَرَ اللهَ انحَلَّت عُقدةٌ، فإن تَوضَّأ انحَلَّت عُقدةٌ، فإن صَلَّى انحَلَّت عُقدةٌ، فأصبَحَ نَشيطًا طَيِّبَ النَّفسِ، وإلَّا أصبَحَ خَبيثَ النَّفسِ كَسلانَ.',
  k1: 'فإنِ استَيقَظَ فذَكَرَ اللهَ انحَلَّت عُقدةٌ',
  dhikr: 'الحَمدُ للهِ الَّذي أحيانا بَعدَ ما أماتَنا وإلَيهِ النُّشورُ',
  k2: 'فإن تَوضَّأ انحَلَّت عُقدةٌ',
  k3: 'فإن صَلَّى انحَلَّت عُقدةٌ',
  successHead: 'أصبحتَ نشيطًا طيّبَ النفس',
  open1: 'يَعقِدُ الشَّيطانُ على قافيةِ رَأسِ أحَدِكُم إذا هو نامَ ثَلاثَ عُقدٍ',
  open2: 'يَضرِبُ كُلَّ عُقدةٍ: عليك لَيلٌ طَويلٌ فارقُدْ',
  successSeg: 'فأصبَحَ نَشيطًا طَيِّبَ النَّفسِ',
  failHead: 'أصبحتَ اليوم خبيثَ النفسِ كسلان',
  failSeg: 'وإلَّا أصبَحَ خَبيثَ النَّفسِ كَسلانَ',
  failLine: 'غدًا فجرٌ جديد',
};

let failures = 0;
const ok = (cond, msg) => { console.log((cond ? '  ✓ ' : '  ✗ ') + msg); if (!cond) failures++; };

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM || undefined });

async function newPage({ standalone = false, time = '2026-10-05T04:40:00+03:00' } = {}) {
  const ctx = await browser.newContext({
    viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true,
    locale: 'ar-SA', timezoneId: 'Asia/Riyadh', colorScheme: 'dark', serviceWorkers: 'block',
  });
  // emulate the iOS home-screen web app (navigator.standalone)
  if (standalone) await ctx.addInitScript(() => Object.defineProperty(navigator, 'standalone', { get: () => true }));
  const page = await ctx.newPage();
  page.on('pageerror', (e) => { console.log('  ✗ page error: ' + e.message); failures++; });
  await page.clock.install({ time: new Date(time) });
  return { ctx, page };
}

async function shot(page, name, settleMs = 600) {
  await page.evaluate(() => document.fonts.ready);
  if (settleMs) await page.clock.runFor(settleMs); // advance the faked clock so rAF animations render
  await page.waitForTimeout(900);                 // real-time CSS transitions (reveals, filters)
  await page.screenshot({ path: `${OUT}/${name}.png` });
  const o = await page.evaluate(() => ({
    sw: document.documentElement.scrollWidth, iw: window.innerWidth,
    wide: Array.from(document.querySelectorAll('body *')).filter((el) => {
      if (!el.getClientRects().length) return false;
      const r = el.getBoundingClientRect();
      return r.width > 0 && (r.right > window.innerWidth + 0.5 || r.left < -0.5) && !el.closest('#sky, #fig'); // decorative fixed layers are clipped, never scroll
    }).map((el) => el.className || el.tagName).slice(0, 5),
  }));
  ok(o.sw <= o.iw && o.wide.length === 0, `${name}: no horizontal overflow (scrollWidth ${o.sw}/${o.iw}${o.wide.length ? ', offenders: ' + o.wide.join(', ') : ''})`);
}

const visibleText = (page) => page.evaluate(() => {
  const s = Array.from(document.querySelectorAll('.screen')).find((x) => !x.hidden);
  return s ? s.innerText : '';
});
const allText = (page, sel) => page.$$eval(sel, (els) => els.map((e) => e.textContent));
// the knots (centre knot body) must sit above the text block, not behind it
const knotsClear = (page) => page.evaluate(() => {
  const k = document.querySelector('#fig [data-k="2"] .k-body').getBoundingClientRect();
  const s = Array.from(document.querySelectorAll('.screen')).find((x) => !x.hidden);
  const a = s.querySelector('[data-anchor]').getBoundingClientRect();
  return { knot: Math.round(k.bottom), text: Math.round(a.top), ok: k.bottom <= a.top + 4 };
});
const screenId = (page) => page.evaluate(() => Array.from(document.querySelectorAll('.screen')).find((x) => !x.hidden)?.id);

// ---------- Happy path ----------
console.log('Happy path (test mode)');
{
  const { ctx, page } = await newPage();
  await page.goto(BASE + '?test=1&start=1');
  ok(await screenId(page) === 's-splash', 'start=1 opens the tap-to-begin splash');
  ok(!(await page.url()).includes('start=1'), 'start=1 is stripped from the URL');
  ok((await page.textContent('#open1')) === REF.open1 && (await page.textContent('#open2')) === REF.open2, 'opening lines exact');
  ok(REF.full.includes(REF.open1) && REF.full.includes(REF.open2), 'opening lines are exact excerpts of the hadith');
  await shot(page, '01-splash-opening', 2600);
  await shot(page, '01b-splash', 4000);

  await page.click('#btn-wake');
  await page.clock.runFor(400);
  ok(await screenId(page) === 's-knot', 'tap → knot 1');
  let t = await visibleText(page);
  ok((await page.textContent('#knot-text')) === REF.k1, 'knot 1 hadith segment exact');
  ok((await page.textContent('#dhikr-text')) === REF.dhikr, 'dhikr exact');
  ok((await allText(page, '[data-text="full"]')).every((x) => x === REF.full), 'full hadith exact (every copy)');
  ok(await page.isDisabled('#btn-done') && await page.isVisible('#dwell-chip'), 'knot 1 "تم" locked during its min-dwell');
  ok(await page.isVisible('#alarm-pill'), 'alarm indicator shown while the tone plays');
  ok(/^\d+:\d{2}$/.test(await page.textContent('#ring-time')), 'countdown ring shows m:ss');
  ok(await page.evaluate(() => document.body.dataset.sky) === 'night', 'sky = night');
  await shot(page, '02-knot1-dwell');
  let kc = await knotsClear(page); ok(kc.ok, `knot 1: knots above the text (${kc.knot} ≤ ${kc.text})`);
  await page.clock.runFor(4500);
  ok(!(await page.isDisabled('#btn-done')), 'knot 1 "تم" enables after the dwell');
  await shot(page, '03-knot1-ready');

  await page.click('#s-knot [data-open="full"]');
  await shot(page, '03b-full-hadith', 0);
  await page.click('#sheet-full [data-close]');

  await page.click('#btn-done');
  await page.clock.runFor(1500);
  ok((await page.textContent('#knot-text')) === REF.k2, 'knot 2 hadith segment exact');
  ok(await page.isDisabled('#btn-done'), 'knot 2 "تم" disabled during min-dwell');
  ok(await page.isVisible('#dwell-chip'), 'dwell countdown shown on the button');
  ok(!(await page.isVisible('#alarm-pill')), 'alarm stops after knot 1');
  ok(await page.evaluate(() => document.body.dataset.sky) === 'water', 'sky = water (wudu)');
  await shot(page, '04-knot2-dwell');
  kc = await knotsClear(page); ok(kc.ok, `knot 2: knots above the text (${kc.knot} ≤ ${kc.text})`);

  // timers survive a reload
  const before = await page.evaluate(() => window.__uqad.session.deadline);
  await page.reload();
  await page.clock.runFor(300);
  const after = await page.evaluate(() => window.__uqad.session && window.__uqad.session.deadline);
  ok(await screenId(page) === 's-knot' && before === after, 'reload mid-knot resumes with the same deadline');

  await page.clock.runFor(4000);
  ok(!(await page.isDisabled('#btn-done')), 'knot 2 "تم" enables after 5s dwell');
  await shot(page, '05-knot2-ready');
  await page.click('#btn-done');
  await page.clock.runFor(1500);
  ok((await page.textContent('#knot-text')) === REF.k3, 'knot 3 hadith segment exact');
  ok(await page.evaluate(() => document.body.dataset.sky) === 'dawn', 'sky = dawn (salah)');
  await page.clock.runFor(5000);
  await shot(page, '06-knot3');
  kc = await knotsClear(page); ok(kc.ok, `knot 3: knots above the text (${kc.knot} ≤ ${kc.text})`);
  await page.click('#btn-done');
  await page.clock.runFor(4000);
  ok(await screenId(page) === 's-success', 'knot 3 → success');
  t = await visibleText(page);
  ok(t.includes(REF.successHead) && (await page.textContent('[data-text="success-seg"]')) === REF.successSeg, 'success text exact');
  ok(await page.evaluate(() => document.body.dataset.sky) === 'dawn', 'sky = dawn');
  await shot(page, '07-success', 2500);

  await page.click('[data-go="home"]');
  await page.clock.runFor(300);
  ok((await page.textContent('#today-result')).includes('حُلَّت'), 'home shows today = success (حُلَّت)');

  // test mode: the test link always starts a fresh trial, even after a finished one
  await page.goto(BASE + '?test=1&start=1');
  await page.clock.runFor(300);
  ok(await screenId(page) === 's-splash', 'test mode: ?start=1 after a finished trial starts a new one');

  // real mode: ?start=1 must never restart a finished day
  await page.evaluate((d) => localStorage.setItem('uqad.v1.history', JSON.stringify({ [d]: 'success' })), await page.evaluate(() => window.__uqad.today()));
  await page.goto(BASE + '?start=1');
  await page.clock.runFor(300);
  ok(await screenId(page) === 's-home' && !(await page.evaluate(() => window.__uqad.session)), 'real mode: ?start=1 after a finished day does not restart it');
  await ctx.close();
}

// ---------- Real timings ----------
console.log('Real mode timings');
{
  const { ctx, page } = await newPage();
  await page.goto(BASE);
  const k = await page.evaluate(() => window.__uqad.KNOTS.map((x) => [x.windowSec, x.minDwellSec]));
  ok(JSON.stringify(k) === JSON.stringify([[300, 60], [600, 180], [2700, 240]]), `windows 5/10/45 min, dwell 1/3/4 min (got ${JSON.stringify(k)})`);
  await ctx.close();
}

// ---------- Home-screen web app (webapp:// opens it with no query string) ----------
console.log('Web app auto-start');
{
  let { ctx, page } = await newPage({ standalone: true });            // 04:40 Riyadh
  await page.goto(BASE);
  ok(await screenId(page) === 's-splash', 'web app opened at 04:40 with no params starts the session');
  ok(await page.evaluate(() => !document.querySelector('#s-splash .badge-test').offsetParent), 'auto-started session is live (no test badge)');
  await page.reload(); await page.clock.runFor(300);
  ok(await screenId(page) === 's-splash' && await page.evaluate(() => window.__uqad.session.knot === 1), 'reopening resumes the same session');
  await ctx.close();

  ({ ctx, page } = await newPage({ standalone: true, time: '2026-10-05T12:00:00+03:00' }));
  await page.goto(BASE);
  ok(await screenId(page) === 's-home', 'web app opened at 12:00 just shows home');
  await ctx.close();

  ({ ctx, page } = await newPage({ standalone: true }));
  await page.goto(BASE);
  await page.evaluate(() => { localStorage.setItem('uqad.v1.history', JSON.stringify({ [window.__uqad.today()]: 'success' })); localStorage.removeItem('uqad.v1.session'); });
  await page.reload(); await page.clock.runFor(300);
  ok(await screenId(page) === 's-home', 'web app does not restart a finished day');
  await ctx.close();

  // this morning's real case: web app left open since the night before, resumed at Fajr
  ({ ctx, page } = await newPage({ standalone: true, time: '2026-10-05T23:00:00+03:00' }));
  await page.goto(BASE);
  ok(await screenId(page) === 's-home', 'web app open at 23:00 shows home');
  await page.clock.fastForward('05:40:00');                           // phone asleep until 04:40
  await page.waitForTimeout(600);
  await page.waitForLoadState();
  await page.clock.runFor(500);
  ok(await screenId(page) === 's-splash', 'resumed at 04:40 after the night → reloads and lands on «استيقظ»');
  await ctx.close();

  ({ ctx, page } = await newPage({ standalone: false }));             // Safari tab at 04:40
  await page.goto(BASE);
  ok(await screenId(page) === 's-home', 'Safari tab without ?start=1 never auto-starts');
  await ctx.close();
}

// ---------- Failure ----------
console.log('Failure path');
{
  const { ctx, page } = await newPage();
  await page.goto(BASE + '?test=1&start=1');
  await page.click('#btn-wake');
  await page.clock.runFor(5300);                  // knot 1 dwell (5s in test mode)
  await page.click('#btn-done');
  await page.clock.runFor(61000);
  ok(await screenId(page) === 's-failed', 'knot 2 deadline passes → failed');
  ok((await page.textContent('[data-text="fail-seg"]')) === REF.failSeg, 'fail segment exact');
  const t = await visibleText(page);
  ok(t.includes(REF.failHead) && t.includes(REF.failLine), 'fail headline + line exact');
  ok(await page.evaluate(() => document.body.dataset.sky) === 'fail', 'sky = fail (dim)');
  await page.clock.runFor(1500);
  await shot(page, '08-failed');
  await ctx.close();
}

// ---------- Failure while closed ----------
console.log('Deadline passes while the app is closed');
{
  const { ctx, page } = await newPage();
  await page.goto(BASE + '?test=1&start=1');
  await page.click('#btn-wake');
  await page.goto('about:blank');
  await page.clock.fastForward(120000);
  await page.goto(BASE + '?test=1');
  await page.clock.runFor(300);
  ok(await screenId(page) === 's-failed', 'reopening after the deadline shows failed');
  await ctx.close();
}

// ---------- Emergency ----------
console.log('Emergency');
{
  const { ctx, page } = await newPage();
  await page.goto(BASE + '?test=1&start=1');
  await page.click('#btn-wake');
  await page.clock.runFor(300);
  await page.click('#btn-emergency');
  ok(await page.isVisible('#confirm'), 'emergency asks for confirmation');
  await shot(page, '09-emergency-confirm');
  // Swallow the shortcuts:// navigation in the test browser
  await page.evaluate(() => { window.__nav = []; });
  await page.click('#confirm-yes');
  await page.clock.runFor(1500);
  ok(await screenId(page) === 's-emergency', 'confirmed → emergency screen');
  ok(await page.evaluate(() => window.__uqad.loadHistory()[window.__uqad.today()]) === 'emergency', 'logged as emergency');
  await shot(page, '10-emergency');
  await ctx.close();
}

// ---------- Home with history ----------
console.log('Home');
{
  const { ctx, page } = await newPage();
  await page.goto(BASE);
  await page.evaluate(() => {
    const h = {}; const t = window.__uqad.today();
    const add = (d, n) => new Date(Date.UTC(+d.slice(0, 4), +d.slice(5, 7) - 1, +d.slice(8, 10)) + n * 864e5).toISOString().slice(0, 10);
    const pat = ['success', 'success', 'emergency', 'success', 'failed', 'success', null, 'success', 'success', 'success'];
    for (let i = 1; i < 30; i++) { const r = pat[i % pat.length]; if (r) h[add(t, -i)] = r; }
    localStorage.setItem('uqad.v1.history', JSON.stringify(h));
  });
  await page.reload();
  await page.clock.runFor(300);
  ok(await screenId(page) === 's-home', 'no session → home');
  const streak = await page.evaluate(() => window.__uqad.streak(window.__uqad.loadHistory()));
  ok(streak === 2, `streak counts back from yesterday, emergency skipped (got ${streak}, expect 2)`);
  ok((await page.$$('.day')).length === 30, '30-day grid');
  await shot(page, '11-home');

  // continuity trend: حُلَّت = 1, لم تكتمل / لا جلسة = −1, طوارئ = gap
  const trendInfo = () => page.evaluate(() => ({
    xLabels: [...document.querySelectorAll('#trend-svg .axis-x')].map((e) => e.textContent),
    dots: document.querySelectorAll('#trend-svg .dot:not(.is-gap)').length,
    gaps: document.querySelectorAll('#trend-svg .dot.is-gap').length,
    range: document.querySelector('#trend-range').textContent,
    sum: document.querySelector('#trend-sum').textContent,
    newerDisabled: document.querySelector('#trend-newer').disabled,
  }));
  let ti = await trendInfo();
  ok(ti.xLabels.join(',') === 'أحد,اثنين,ثلاثاء,أربعاء,خميس,جمعة,سبت', 'weekly trend: Sunday → Saturday labels');
  ok(ti.range.startsWith('الأحد، ٤ أكتوبر') && ti.range.endsWith('السبت، ١٠ أكتوبر'), `weekly range shows day + date (${ti.range})`);
  ok(ti.dots === 1 && ti.newerDisabled, 'current week: only past days plotted, «next» disabled');
  await page.click('#trend-older');
  ti = await trendInfo();
  ok(ti.dots === 6 && ti.gaps === 1, `previous week: 6 points + 1 emergency gap (got ${ti.dots}+${ti.gaps})`);
  ok(ti.sum.includes('+٢'), `previous week balance = 4 حُلَّت − 2 missed = +٢; طوارئ adds nothing (got ${ti.sum})`);
  await page.click('#trend-svg', { position: { x: 200, y: 80 } });
  ok(await page.isVisible('#trend-tip'), 'tapping the chart shows the day tooltip');
  await shot(page, '12-trend-week', 0);
  await page.click('#trend-mode [data-mode="month"]');
  ti = await trendInfo();
  ok(ti.range === 'أكتوبر ٢٠٢٦' && ti.xLabels.filter(Boolean).length === 5, `monthly view (${ti.range})`);
  await page.click('#trend-older');
  await shot(page, '13-trend-month', 0);
  await page.click('#trend-mode [data-mode="year"]');
  ti = await trendInfo();
  ok(ti.range === '٢٠٢٦' && ti.xLabels.join(',') === 'يناير,أبريل,يوليو,أكتوبر', 'yearly view: 12 months');
  await shot(page, '14-trend-year', 0);

  // corrupt storage must not crash
  await page.evaluate(() => { localStorage.setItem('uqad.v1.session', '{oops'); localStorage.setItem('uqad.v1.history', '[1,2'); });
  await page.reload();
  await page.clock.runFor(300);
  ok(await screenId(page) === 's-home', 'corrupt storage → home, no crash');
  await ctx.close();
}

await browser.close();
console.log(failures ? `\n${failures} check(s) failed` : '\nAll checks passed');
process.exit(failures ? 1 : 0);
