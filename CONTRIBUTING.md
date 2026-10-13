# Contributing

Thanks for your interest! This is a hobby project built by one runner, kept
deliberately simple. The calculator is one plain HTML/CSS/JavaScript file with
no frameworks and no dependencies; the surrounding site is a small Astro
project. If you can open a file in a text editor, you can contribute.

## Ways to help

- **Found a bug?** Open an issue with what you did, what you expected, and
  what happened. A screenshot or the shared-plan URL helps a lot.
- **Think the math is wrong?** Even better. Open an issue and make your case;
  the runner-profile exponent range, the archetypes, and the pacing philosophy
  are all fair game. Runners arguing about pacing is a feature, not a bug.
- **Want to add or fix something?** Fork the repo, make your change, and open
  a pull request with a short note about what it does and why.

## Ground rules for pull requests

1. **Keep the calculator dependency-free.** No frameworks, npm packages, or
   external scripts in `public/calculator.html`. It must stay a single
   self-contained HTML file that works offline. Site pages live in `src/`;
   run `npm run dev` to preview and `npm run build` before opening a PR.
2. **Mobile first.** Everything must work on a phone without horizontal
   scrolling.
3. **No ads, no signup, no invasive tracking.** Anonymous, cookieless visit
   counting (GoatCounter) is the only measurement allowed. Nothing that profiles users,
   sets cookies, or sends their data anywhere.
4. **Test the basics** before submitting: even splits, segments, the
   equivalency slider, share links, and the download button.

## Not sure? Just open an issue.

Ideas, questions, and half-formed suggestions are all welcome. Worst case, we
talk about running.
