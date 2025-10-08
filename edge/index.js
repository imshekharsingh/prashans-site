export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Dynamic API endpoint
    if (url.pathname === '/api/listings') {
      const listings = [
        { name: 'Luxury Beach Villa', details: '3 Beds • 2 Baths • Ocean View', image: '/assets/images/villa.jpg' },
        { name: 'Cozy Mountain Cabin', details: '2 Beds • 1 Bath • Forest Retreat', image: '/assets/images/cabin.jpg' },
        { name: 'City Apartment Downtown', details: '1 Bed • 1 Bath • Central Location', image: '/assets/images/apartment.jpg' }
      ];
      return new Response(JSON.stringify(listings), { headers: { 'Content-Type': 'application/json' } });
    }

    // Proxy static site requests to Cloudflare Pages
    try {
      let path = url.pathname;
      if (!path.startsWith("/")) path = "/" + path;
      const pagesUrl = new URL(path + url.search, env.PAGES_URL);

      const response = await fetch(pagesUrl.toString(), {
        method: request.method,
        headers: request.headers,
        body: ['GET', 'HEAD'].includes(request.method) ? null : request.body
      });

      return response;
    } catch (err) {
      return new Response('Error fetching from Pages: ' + err.message, { status: 500 });
    }
  }
};