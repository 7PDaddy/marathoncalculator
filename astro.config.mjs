// @ts-check
import { defineConfig } from 'astro/config';

// Cloudflare Pages serves /calculator from calculator.html (extensionless URLs).
// Mirror that in `astro dev` and `astro preview` so local links match production.
const extensionless = {
  name: 'extensionless-static-files',
  /** @param {import('vite').ViteDevServer} server */
  configureServer(server) { server.middlewares.use(rewrite); },
  /** @param {import('vite').PreviewServer} server */
  configurePreviewServer(server) { server.middlewares.use(rewrite); },
};
/** @type {import('connect').NextHandleFunction} */
function rewrite(req, _res, next) {
  const [path, query = ''] = (req.url ?? '').split('?');
  if (path === '/calculator' || path === '/widget') {
    req.url = path + '.html' + (query ? '?' + query : '');
  }
  next();
}

// build.format 'preserve' keeps the live URL shapes exactly:
// about.astro -> about.html (served at /about) and
// 2026-goals/index.astro -> 2026-goals/index.html (served at /2026-goals/).
export default defineConfig({
  site: 'https://marathoncalculator.com',
  trailingSlash: 'ignore',
  build: { format: 'preserve' },
  // Keep whitespace as authored: compression drops the space before inline links.
  compressHTML: false,
  vite: { plugins: [extensionless] },
});
