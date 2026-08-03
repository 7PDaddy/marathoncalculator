# Marathon & More Calculator

A free, open-source race pace calculator built marathon-first. Plan your splits,
build a segment-based race strategy, and get honest race equivalency predictions
that account for whether you actually did the training.

**Live site:** https://marathoncalculator.com

Plain HTML/CSS/JS in a single file. No frameworks, no build step, no server, no
tracking, no ads, no signup.

## Files

| File | What it is |
|---|---|
| `calculator.html` | The complete calculator. Standalone and embeddable. |
| `index.html` | The homepage. Embeds the calculator via iframe, so the site and the tool can evolve independently. |
| `about.html` | "How We Built It": the math, the variables, and the runner types behind the tool. |
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
- **Shareable plans.** The URL updates live. "Share my plan" copies a link that
  rebuilds the exact plan; "Download plan" saves a clean, printable HTML summary
  you can keep or hand to a coach.
- Remembers your last plan locally (localStorage only, nothing sent anywhere).
- Mobile-first layout.

## Deploying

All files go in the repo root. Works on Cloudflare Pages, GitHub Pages, Netlify,
or any static host. No build command.

## Embedding on your own site

The calculator footer has an **"Embed this calculator"** link that generates
copy-paste iframe code, including a credit link. The calculator reports its
height to the parent page via `postMessage` (`{type:"mc-height", height}`) so
the iframe can auto-size; `index.html` shows the small listener. A fixed
`height="1600"` also works. When embedded, the calculator switches to a compact
header automatically.

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

Bug reports, math arguments, and pull requests are all welcome. The whole tool
is one HTML file, so it's easy to read and easy to change. If you think the
exponent range, the runner types, or anything else should work differently,
open an issue and make your case. Runners arguing about pacing is a feature.

## License

MIT. Use it, copy it, embed it, improve it.
