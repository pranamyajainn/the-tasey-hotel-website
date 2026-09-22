# SEO Audit — The Tasey Hotel

Read-only audit. No application files were changed to produce this document.

- Canonical URL: `https://thetaseyhotel.com` (from `src/lib/site.ts`, `SITE_URL`)
- Brand: The Tasey Hotel
- GSC property type recommendation: **Domain property** (`thetaseyhotel.com`) — DNS is on GoDaddy nameservers pointed at Vercel, so a DNS TXT record is straightforward and a domain property automatically covers `www`, `http`, and any future subdomain in one verification, instead of re-verifying per URL-prefix.
- Environments that must never be indexed: `tasey-hotel.vercel.app` (the Vercel-assigned preview/alias domain), any future `*.vercel.app` deploy-preview URL, `localhost`.

---

## A. Stack detection

- **Framework**: Next.js 16.3.5, App Router (`src/app/`), React 19.3.0, TypeScript, Tailwind CSS 4.
- **Build tool**: Next.js/Turbopack (`next build`), no separate bundler config.
- **Hosting**: Vercel (confirmed via `x-vercel-id` response headers on both the custom domain and `tasey-hotel.vercel.app`).
- **Config files present**: `next.config.ts` only. No `vercel.json`, `netlify.toml`, `firebase.json`, nginx conf, `.htaccess`, or `Dockerfile` — hosting behavior (redirects, headers merge, HTTPS) is entirely Vercel's platform defaults plus what `next.config.ts` declares.
- **Rendering mode**: The entire site is **one route** (`/`), a client component (`"use client"` in `src/app/page.tsx`) that Next.js statically prerenders at build time (`○ (Static)` in the build output, confirmed earlier in this session and re-confirmed today by `curl`-ing the live site and finding full text content in the raw HTML). **No crawlability risk** — content is not hidden behind client-side JS for first paint, even though the page is interactive/client-rendered after hydration.
- `not-found.tsx` and `error.tsx` are both present, both client-rendered where appropriate (`error.tsx` must be a client component per Next.js convention), both statically prerendered.

## B. Complete route inventory

This app has **one page**, not a multi-route site. There is no router config, file-system route tree, or CMS driving multiple URLs — every "section" (Rooms, Dining, Gallery, etc.) is an anchor (`#rooms`, `#dining`, ...) inside the single `/` document, not a separate URL.

| Path | Static/Dynamic | Rendering | Auth-gated | Indexable |
|---|---|---|---|---|
| `/` | Static | SSG (prerendered) | No | **Yes** |
| `/_not-found` (Next.js internal 404 route) | Static | SSG | No | No (`robots: noindex` already set in `not-found.tsx`) |
| `/robots.txt` (generated) | Static | SSG | No | N/A (infrastructure file) |
| `/sitemap.xml` (generated) | Static | SSG | No | N/A (infrastructure file) |
| `/icon.png`, `/apple-icon.png`, `/favicon.ico` | Static | SSG | No | N/A (assets) |

**Routes to exclude from indexing:** none needed beyond the automatic 404 — there is no `/admin`, `/api`, `/checkout`, `/search`, `/cart`, or paginated listing anywhere in the codebase. `src/app/error.tsx` is a runtime error boundary, not a routable URL, so it has no metadata/indexing concern of its own.

**Non-production hosts reachable right now:**
- `https://tasey-hotel.vercel.app` — Vercel's own subdomain for this project. **Currently NOT blocked** (see gap table, D-1). Confirmed via `curl https://tasey-hotel.vercel.app/robots.txt`: it serves the same `Allow: /` rules as the real domain.
- Any future `*-git-<branch>.vercel.app` preview URL Vercel generates per deploy — same exposure, not addressed by anything in the repo today.

## C. Existing SEO surface

This is already substantially built out — a prior commit (`e22f005`, "Harden the site for production: headers, SEO, error pages, dialog a11y") did real work here. Summary of what exists today:

- **`<head>` management**: Next.js Metadata API (`export const metadata` in `src/app/layout.tsx` and `src/app/not-found.tsx`). No `next/head`, no `react-helmet`. This is the idiomatic mechanism for App Router — correct choice.
- **`metadataBase`**: set to `https://thetaseyhotel.com` in `layout.tsx`, sourced from `SITE_URL` in `src/lib/site.ts`. This makes every relative OG/canonical URL resolve to the real domain automatically.
- **Title**: default `"The Tasey Hotel | Amer, Jaipur"` with a `%s | The Tasey Hotel` template (unused today since there's only one page, but correctly wired for if a second page is ever added).
- **Description**: set once, from `HOTEL.description` in `site.ts`.
- **Canonical**: `alternates: { canonical: "/" }` → resolves via `metadataBase` to `https://thetaseyhotel.com`. **Verified live**: both the apex and `www` host serve a self-referencing `<link rel="canonical" href="https://thetaseyhotel.com"/>`.
- **`robots` meta tag**: `index: true, follow: true` site-wide on `/`; `not-found.tsx` explicitly sets `robots: { index: false, follow: true }`. Verified live: `<meta name="robots" content="index, follow"/>` renders on `/`.
- **Open Graph**: type, site name, locale (`en_IN`), url, title, description, and a real 1600×1067 image (`HOTEL.image` = `/images/tasey-01.jpeg`) all set.
- **Twitter card**: `summary_large_image` with matching title/description/image.
- **`robots.txt`**: generated via `src/app/robots.ts` (Next.js Metadata Route convention — correct idiomatic approach, not a static file). Allows `/`, disallows `/New Images/` (an untracked local-only folder that happens to be under `public/`), references the sitemap and host.
- **`sitemap.xml`**: generated via `src/app/sitemap.ts` — currently returns exactly one entry (`/`), which is accurate given there is only one page.
- **JSON-LD structured data**: a `Hotel` schema (`schema.org`) in `layout.tsx`, with real address, geo-coordinates (approximate — flagged with a code comment: "replace with the exact pin from Google Business"), phone, price range, amenity list, and a `makesOffer` array for the three room tiers with **current, correct prices** (₹2,900 / ₹3,800 / ₹5,400 — matches today's live pricing). This is a strong, entity-appropriate schema choice for a hotel; no invented fields.
- **Favicon/app icons**: `favicon.ico`, `icon.png`, `apple-icon.png` all present under `src/app/` (Next.js auto-serves these), all verified reachable (200) on the live domain.
- **Redirects / host normalization**: HTTP → HTTPS redirect works (308, confirmed live). **`www` → apex does NOT redirect** — `www.thetaseyhotel.com` serves 200 directly rather than 301/308-ing to the apex (see gap table, D-2). No trailing-slash inconsistency observed (root path only).
- **i18n**: none. Single locale (`en_IN` in OG tags, `lang="en"` on `<html>`). No hreflang needed.
- **Base-URL env vars**: none — `SITE_URL` is a hardcoded constant in `src/lib/site.ts`, not an environment variable. It does not differ per environment (see gap table, D-1 — this is *why* the Vercel preview domain isn't blocked: robots/sitemap/metadata all unconditionally assume they're being served from the production host).
- **Security headers**: CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, HSTS (`max-age=63072000; includeSubDomains; preload`), X-DNS-Prefetch-Control — all set in `next.config.ts`, verified present on live response headers. Not strictly an SEO item, but Core Web Vitals / trust signals benefit from HSTS and correct headers.
- **Google Search Console verification**: **not present anywhere** — no `google-site-verification` meta tag, no static verification HTML file under `public/`, no env var placeholder for a verification token (see gap table, D-3).

## D. Gap table

| # | File | What's wrong | SEO impact | Severity | Proposed fix |
|---|---|---|---|---|---|
| D-1 | `src/app/robots.ts`, `src/lib/site.ts` | `robots.txt` is identical on `thetaseyhotel.com` and `tasey-hotel.vercel.app` — the Vercel preview domain is fully crawlable and points its own sitemap reference at the production host. | Medium. Google *can* index the `.vercel.app` URL as a near-duplicate of the real site, diluting signals, even though its pages self-declare a canonical pointing at `thetaseyhotel.com` (which mitigates but doesn't eliminate the risk — Google still has to crawl and reconcile it). | Medium | Make `robots()` host-aware: read the incoming request host (via `headers()` from `next/headers`) and return `Disallow: /` for any host that isn't `thetaseyhotel.com`/`www.thetaseyhotel.com`. Requires `robots.ts` to become dynamic (opt out of static generation for that one route only) — flagging per Operating Rule 4 since it changes a route's rendering mode. |
| D-2 | Vercel domain settings (not a repo file) | No `www` → apex redirect. `www.thetaseyhotel.com` returns 200 instead of 301/308 to `https://thetaseyhotel.com`. | Low — the canonical tag already tells Google which host is authoritative, so this is a belt-and-suspenders fix, not a blocker. | Low | Configure the redirect in Vercel's Domains settings (Project → Settings → Domains → add `www` as a redirect to the apex), not a code change. |
| D-3 | No file exists yet | No Google Search Console verification mechanism (meta tag or file) anywhere in the repo. | Blocks Phase 5 entirely — you cannot submit the sitemap or see indexing data without verifying ownership first. | **Blocker** (for the GSC goal specifically; not a blocker for the site's actual SEO health) | Add a `google-site-verification` meta tag to `layout.tsx` (or a static HTML file under `public/`, per whichever method GSC issues) driven by an env var, e.g. `NEXT_PUBLIC_GSC_VERIFICATION`, left blank until you paste the real token from Google. |
| D-4 | `src/app/sitemap.ts` | `lastModified: new Date()` is evaluated at build/request time, not tied to any real content-change signal (no CMS `updated_at`, no git log lookup). | Low. Per the audit's own rule ("if no real signal exists, omit the field"), this technically counts as a fabricated timestamp — it says "changed right now" on every rebuild regardless of whether anything changed. | Low | Either omit `lastModified` entirely, or derive it from `git log -1 --format=%cI` for the tracked content files, resolved at build time. |
| D-5 | `src/app/sitemap.ts` | Includes `changeFrequency` and `priority` fields. | None functionally — Google has publicly stated it ignores both fields. Pure noise. | Low (style only) | Drop both fields; keep `url` and (if fixed per D-4) `lastModified`. |
| D-6 | `src/lib/site.ts` | `latitude`/`longitude` in the `Hotel` JSON-LD are marked in a code comment as "Approximate — replace with the exact pin from Google Business." | Low-medium. An imprecise pin can misplace the hotel on Google's map card in rich results. | Low | Pull the exact coordinates from Google Business Profile (a data question for you/your boss, not something I can derive from the repo — listed again in Open Questions). |
| D-7 | `public/` | `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` are unused Next.js starter-template assets, still deployed and publicly reachable (not referenced by any component). | Negligible SEO impact (they're not linked from anywhere, so nothing will crawl into them), but they're dead weight in the deployed bundle. | Low (housekeeping, not really an SEO item) | Safe to delete — flagging since Operating Rule 4 says ask before anything that changes build output, and deleting public assets does that. |

No blockers exist for the site's actual on-page SEO — titles, descriptions, canonicals, OG/Twitter tags, structured data, and `robots.txt`/`sitemap.xml` are all already correctly implemented and verified live. The only genuine blocker (D-3) is specifically for the **Google Search Console verification step**, which is expected — that step always requires a fresh token from Google that no amount of code archaeology can produce.

## E. Open questions for you / your boss

1. **GSC verification**: once you start the "Add property" flow in Search Console for `thetaseyhotel.com`, Google will give you either a TXT record to add at your DNS host (GoDaddy) or an HTML meta tag / file to add to the site. Which do you want to use? A DNS TXT record (Domain property, no code change needed at all) is simplest given you already manage DNS at GoDaddy.
2. **Exact GPS pin** for the hotel — is there a Google Business Profile listing already, or should this stay approximate for now?
3. Do you want the `.vercel.app` domain blocked from crawling (D-1), or is it acceptable as-is since it's not linked from anywhere and its pages self-canonicalize to the real domain?
4. Should I remove the unused Next.js starter SVGs (D-7) while I'm in there, or leave them alone since they're harmless?

---

**Top blockers, summarized:** Only one real blocker exists, and it's not a code problem — **Google Search Console verification hasn't been started yet**, because it needs a token from Google that doesn't exist until you begin that flow. Everything else in this audit is low/medium polish on top of an already-solid foundation (metadata, canonical, Open Graph, JSON-LD, and the generated `robots.txt`/`sitemap.xml` are all correct and verified live). No file changes were made to produce this report.
