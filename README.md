# Hekman Technology

Standalone company website for Hekman Technology Consulting LLC. The site is served as static assets by a Cloudflare Worker, with `/privacy` and `/terms` routes and `www` redirected to the apex domain.

## Local preview

Install dependencies with `npm install`, then run `npm run dev` and open <http://localhost:8788>.

## Deploy

Run `npm run deploy` after authenticating Wrangler with the Cloudflare account that owns `hekmantechnology.com`. The custom domains are declared in `wrangler.jsonc`.

Cloudflare Git integration can deploy this repository directly with no build command and `npx wrangler deploy` as the deploy command.
