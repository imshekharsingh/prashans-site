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

    // Proxy all other requests to Cloudflare Pages site
    const pagesUrl = new URL(request.url);
    pagesUrl.href = `${env.PAGES_URL}${pagesUrl.pathname}${pagesUrl.search}`;
    const response = await fetch(pagesUrl.toString(), request);
    return response;
  },
};