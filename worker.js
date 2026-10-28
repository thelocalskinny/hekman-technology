export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'www.hekmantechnology.com') {
      url.hostname = 'hekmantechnology.com';
      return Response.redirect(url, 308);
    }

    return env.ASSETS.fetch(request);
  },
};
