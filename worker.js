export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'www.hekmantechnology.com') {
      url.hostname = 'hekmantechnology.com';
      return Response.redirect(url, 308);
    }

    const pages = { '/privacy': '/privacy.html', '/terms': '/terms.html' };
    const path = pages[url.pathname];
    if (path) url.pathname = path;
    return env.ASSETS.fetch(new Request(url, request));
  },
};

