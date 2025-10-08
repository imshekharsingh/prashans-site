export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Dynamic API
    if (url.pathname === '/api/listings') {
      const listings = [
        { name: 'Luxury Beach Villa', details: '3 Beds • 2 Baths • Ocean View', image: '/assets/images/villa.jpg' },
        { name: 'Cozy Mountain Cabin', details: '2 Beds • 1 Bath • Forest Retreat', image: '/assets/images/cabin.jpg' },
        { name: 'City Apartment Downtown', details: '1 Bed • 1 Bath • Central Location', image: '/assets/images/apartment.jpg' }
      ];
      return new Response(JSON.stringify(listings), { headers: { 'Content-Type': 'application/json' } });
    }

    // Proxy all other requests to Pages
    try {
      // Construct the full URL to Pages
      const pagesUrl = new URL(url.pathname + url.search, env.PAGES_URL);

      // Forward request method, headers, body
      const response = await fetch(pagesUrl.toString(), {
        method: request.method,
        headers: request.headers,
        body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : null,
      });

      return response;
    } catch (err) {
      return new Response('Error fetching from Pages: ' + err.message, { status: 500 });
    }
  },
};