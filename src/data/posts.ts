// Blog posts, newest first. Drives the homepage teasers.
export interface Post { title: string; url: string; date: string; blurb: string; }

export const posts: Post[] = [
  { title: 'How to Use AI to Plan Your Marathon Pace', url: '/use-ai-to-plan-your-marathon-pace/', date: 'October 13, 2026', blurb: 'Build the pace in the calculator, then pressure test it with AI. The workflow, the prompts, and where AI gets it wrong.' },
  { title: 'What to Ask AI About Your Training Runs', url: '/analyze-training-runs-with-ai/', date: 'October 13, 2026', blurb: "What to share, what to ask, and how to check an AI assistant's feedback against your actual race plan." },
  { title: 'Sub-4 Hour Marathon: Three Pace Plans That Actually Work', url: '/sub-4-hour-marathon-pace/', date: 'August 23, 2026', blurb: "The textbook, the pro playbook, and the founder's honest hold-on method, each as a live plan." },
  { title: 'The Marathon Mindset: Why Corporate Races Lose and Runners Win', url: '/marathon-mindset-boom-and-bust/', date: 'June 1, 2026', blurb: 'The corporate marathon model is facing a bust, but the marathon mindset is more powerful than ever.' },
  { title: '2026 Goals: Why the Marathon Is a Symbol for Achieving More', url: '/2026-goals/', date: 'December 30, 2025', blurb: 'Why running a marathon is symbolic for achieving bigger personal and life goals.' },
  { title: 'Old-School Motivation, Right on the Box', url: '/pace-chart-shoebox-inspiration/', date: 'August 23, 2025', blurb: 'A printed pace chart and PR tracker on a shoebox offers old-school motivation.' },
  { title: 'Marathon Calculator Reviews', url: '/marathon-calculator-reviews/', date: 'December 20, 2024', blurb: "A runner's roundup of the best marathon calculators out there." },
  { title: "Let's Make This Great", url: '/provide-your-feedback/', date: 'October 4, 2024', blurb: 'Help shape the future of these free running tools.' },
];
