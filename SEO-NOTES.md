# SEO Package - What's Included & Launch Checklist

## Included in this zip

| File | Purpose |
|---|---|
| robots.txt | Allows all crawlers, points to the sitemap |
| sitemap.xml | All 9 pages with dates and priorities |
| _redirects | Cloudflare Pages redirects: old WordPress archive/category/author/feed URLs 301 to the right places, so no link equity is lost |
| favicon.svg | Simple "26.2" brand icon (blue + finish-tape yellow), referenced by every page |
| 404.html | Custom branded not-found page (Cloudflare Pages serves it automatically) |
| Blog pages | All 5 posts rebuilt at their ORIGINAL WordPress URLs (/2026-goals/, /marathon-mindset-boom-and-bust/, etc.) so existing Google rankings and backlinks keep working |
| /marathoncalculator/ | Your About Us page, same original URL |

Every page now has: unique title + meta description, meta keywords, canonical
URL, Open Graph + Twitter card tags, favicon, and JSON-LD structured data
(WebApplication for the calculator, BlogPosting for posts, Article for the
methodology page).

## Before you upload

1. Find-and-replace `YOUR-GITHUB/marathon-calculator` with your real GitHub
   repo path. It appears in: index.html, about.html, and each blog page's nav,
   plus the feedback post's GitHub Issues link.

## After the domain cutover

2. **Google Search Console** (search.google.com/search-console): verify the
   domain if you haven't, and submit sitemap.xml. This is the single
   highest-value SEO step, it tells Google to recrawl everything.
3. **Bing Webmaster Tools** (bing.com/webmasters): same, five minutes.
4. Spot-check the old URLs in a browser: /2026-goals/ should load the post,
   /category/whats-up/ should redirect home.

## Notes

- Blog post images from WordPress (/wp-content/uploads/...) are NOT in this
  zip because they live on the WordPress server. The rebuilt posts read fine
  without them. If you want them back, download from WordPress before shutdown,
  drop into /images/, and add img tags.
- The feedback post's comment form was WordPress-only; the rebuilt page points
  to GitHub Issues instead.
- Meta keywords tags are included as requested. Google ignores them (has since
  2009), but they're harmless and some smaller engines still read them. The
  tags doing the real work are titles, descriptions, canonicals, and JSON-LD.
- The old WordPress URLs /?p=74 and /?p=64 can't be redirected by _redirects
  (query strings aren't matchable), but the canonical pretty URLs are covered,
  which is what Google has indexed.
