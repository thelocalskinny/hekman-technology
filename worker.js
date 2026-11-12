// Every page has exactly one public address: https://hekmantechnology.com/...
// Google flags the site with "Duplicate without user-selected canonical" when the
// same page also answers on www, plain http, or the workers.dev address, so those
// all redirect here permanently. `npm run dev` sets LOCAL_DEV, because wrangler dev
// presents local requests as http://hekmantechnology.com and would loop.
const CANONICAL_ORIGIN = 'https://hekmantechnology.com';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (!env.LOCAL_DEV && url.origin !== CANONICAL_ORIGIN) {
      return Response.redirect(CANONICAL_ORIGIN + url.pathname + url.search, 301);
    }

    return env.ASSETS.fetch(request);
  },
};
