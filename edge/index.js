export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === '/api/listings') {
      const listings = [
        { name: 'Luxury Beach Villa', details: '3 Beds • 2 Baths • Ocean View', image: '/assets/images/villa.jpg' },
        { name: 'Cozy Mountain Cabin', details: '2 Beds • 1 Bath • Forest Retreat', image: '/assets/images/cabin.jpg' },
        { name: 'City Apartment Downtown', details: '1 Bed • 1 Bath • Central Location', image: '/assets/images/apartment.jpg' }
      ];

      return new Response(JSON.stringify(listings), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*', // Allow all origins (or set to 'https://prashans.super-cdn.com')
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        },
      });
    }

    // Respond to OPTIONS requests for CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      });
    }

    return new Response('Endpoint not found', { status: 404 });
  }
};