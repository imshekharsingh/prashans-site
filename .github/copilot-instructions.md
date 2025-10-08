## Purpose
Short, actionable guidance for AI coding agents working in this repository.

## Big picture (what this repo is)
- Simple static website served from `public/`.
- `public/assets/` holds static assets (css, images, js). Edit these for client-side changes.
- `public/demo/` contains example pages (e.g. `edge.html`, `cache.html`) used to exercise edge-worker behavior.
- `edge/index.js` contains Cloudflare Workers / edge logic. Treat this as the server/edge boundary.
- `wrangler.toml` is the expected Cloudflare Workers config file (present but currently empty in the repo) — if populated, deployment and local worker emulation use Wrangler.

## Where to make common changes
- Edit the site markup: `public/index.html`, `public/about.html`.
- Client JS/CSS: `public/assets/js/` and `public/assets/css/`.
- Edge logic: `edge/index.js`. Small changes to routing/caching should live here.
- Demo pages: `public/demo/*` — useful for writing small manual tests that exercise `edge/index.js`.

## Developer workflows (discoverable patterns)
- Check `package.json` for project scripts before running npm commands. The file exists but may be empty; do not assume scripts are present.
- If `wrangler.toml` is configured, use Wrangler for local dev and publishing (e.g. `wrangler dev` and `wrangler publish`).
- There are no tests or CI config files in the repository root. Expect manual validation via the demo pages and browser testing.

## Project-specific conventions
- Public static files under `public/` are deployed as-is. Do not move site files outside `public/` unless changing deployment configuration.
- The `edge/` directory is the single place for server/edge code. Keep edge-specific logic there — avoid duplicating server logic into client assets.
- Demos in `public/demo/` are treated as behavioral tests. When adding or fixing edge behavior, add or update a demo page to demonstrate it.

## Integration points & external dependencies
- Cloudflare Workers (implied by `wrangler.toml` and `edge/`). Confirm API tokens and account settings are stored externally (not in repo).
- No package lock or dependency manifests with content were found; verify `package.json` before installing dependencies.

## Actionable rules for edits
1. Small content/layout changes: edit `public/*.html` and `public/assets/*`. Preview in a browser.
2. Client behavior changes: edit files in `public/assets/js/` and test `public/demo/` pages.
3. Edge changes: edit `edge/index.js`. Before publishing, run Wrangler only if `wrangler.toml` contains account/route settings.
4. Always run a local manual check of `public/demo/edge.html` and `public/demo/cache.html` after edge or cache changes.

## Useful searches (quick checks)
- Search for TODO, FIXME and edge-specific keywords: `TODO|FIXME|edge|worker|wrangler`.
- Confirm top-level config files exist and have content: `package.json`, `wrangler.toml`.

## Safety & review notes
- Secrets and credentials should never be added to `wrangler.toml` or `package.json` in the repo. Use environment variables or secret management.
- Because there are no automated tests, prefer small PRs with manual demo page updates so reviewers can validate behavior quickly.

If anything in these notes is unclear or you want more detail (example PR templates, local dev scripts, or a minimal test harness), tell me which area to expand and I'll iterate.
