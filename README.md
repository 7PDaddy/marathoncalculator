# Marathon & More Calculator

A free, open-source race pace calculator built marathon-first. Plan your splits,
build a segment-based race strategy, and get honest race equivalency predictions
that account for whether you actually did the training.

**Live site:** https://marathoncalculator.com

The calculator is plain HTML/CSS/JS in a single self-contained file: no
frameworks, no dependencies, works offline. The surrounding site is a small
[Astro](https://astro.build) project that builds to static files. No server, no
ads, no cookies, no signup. The only measurement is anonymous, cookieless visit
counting (GoatCounter), described on the site's privacy page.

## Files

| File | What it is |
|---|---|
| `public/calculator.html` | The complete calculator. Standalone and embeddable. Copied to the site untouched, never processed by Astro. |
| `public/widget.html` | The compact embeddable pace widget. |
| `src/pages/` | Site pages: homepage (embeds the calculator via iframe), "How We Built It", privacy, and blog posts. |
| `src/layouts/` | Shared page shell (`Base`) and blog layout (`Page`). |
| `src/data/posts.ts` | Blog post list that feeds the homepage teasers. |
| `LICENSE` | MIT. |

## Features

- **Pace / time calculator.** Marathon first, plus half, 10K, 5K, and custom
  distances, in miles or kilometers. Enter time or pace; the other updates.
- **Split strategy.** Even splits, or break the race into up to 5 **segments**
  with different paces (like 20 miles controlled + 10K fast finish). The last
  segment auto-fills the remaining distance, the split table marks every pace
  change, and a course strip visualizes the plan.
- **Race equivalency.** Its own mini-calculator using the Riegel formula
  (T2 = T1 x (D2/D1)^exp). The runner-profile slider covers exponent 1.04-1.12,
  deliberately wider on the "fades over distance" side than the textbook 1.06,
  because undertrained marathoners fade far more than classic Riegel predicts.
  See `about.html` for the reasoning.
- **Coach's notes.** Two voices react to the plan you build: **Sergeant Stride**
  (disciplined, opinionated, and owns that they are opinions) and **The Pace
  Cadet** (encouraging, funny, here for the snacks). Rules-based JavaScript, no
  AI service, no cost. Two coaches because there is no one right way to run.
- **Shareable plans.** The URL updates live. "Share my plan" copies a link that
  rebuilds the exact plan; "Download plan" saves a clean, printable HTML summary
  you can keep or hand to a coach.
- Remembers your last plan locally in your browser's localStorage. Plans are
  never sent to a server.
- Mobile-first layout.

## Deploying

```
npm install
npm run dev      # local preview
npm run build    # static site into dist/
```

On Cloudflare Pages: build command `npm run build`, output directory `dist`.
Pushing to `main` redeploys. The output is plain static files, so any static
host works.

## Embedding on your own site

The calculator footer has an **"Embed this calculator"** link that generates
copy-paste iframe code, including a credit link. The calculator reports its
height to the parent page via `postMessage` (`{type:"mc-height", height}`) so
the iframe can auto-size; `index.html` shows the small listener. A fixed
`height="1600"` also works. When embedded, the calculator switches to a compact
header automatically.

## The mini widget

`widget.html` is a compact (340px) pace checker any site can embed in a
sidebar. It converts a goal time to per-mile and per-km pace and links back to
the full planner with the plan prefilled. Embed code (also available from the
"Embed this calculator" link in the calculator footer):

```
<iframe src="https://marathoncalculator.com/widget" style="width:100%;max-width:360px;border:0;" height="330"
  title="Race pace widget by MarathonCalculator.com" loading="lazy"></iframe>
```

## Shareable URL format

```
?d=marathon&u=mi&mode=custom&b1_dist=20&b1_pace=8:00&b2_dist=6.22&b2_pace=9:00&eq=half&eqt=1:45:00&profile=1.060
```

| Param | Meaning |
|---|---|
| `d` / `cd` | race distance key / custom distance value |
| `u` | `mi` or `km` |
| `mode` | `even` or `custom` (segments) |
| `t` | goal time (even mode) |
| `bN_dist`, `bN_pace` | segment N distance and pace |
| `eq`, `eqt` | equivalency input distance and time |
| `profile` | Riegel exponent, 1.04-1.12 |

## Contributing

Bug reports, math arguments, and pull requests are all welcome. The calculator
is one HTML file, so it's easy to read and easy to change. If you think the
exponent range, the runner types, or anything else should work differently,
open an issue and make your case. Runners arguing about pacing is a feature.

## License

MIT. Use it, copy it, embed it, improve it.
