export default {
  async fetch(request) {
    const url = new URL(request.url);

    // API endpoint for listings
    if (url.pathname === '/api/listings') {
      const listings = [
        { name: 'Luxury Beach Villa', details: '3 Beds • 2 Baths • Ocean View', image: 'villa.jpg', price: '$199/night', location: 'Malibu, CA' },
        { name: 'Cozy Mountain Cabin', details: '2 Beds • 1 Bath • Forest Retreat', image: 'cabin.jpg', price: '$129/night', location: 'Aspen, CO' },
        { name: 'City Apartment Downtown', details: '1 Bed • 1 Bath • Central Location', image: 'apartment.jpg', price: '$99/night', location: 'New York, NY' }
      ];

      return new Response(JSON.stringify(listings), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      });
    }

    // Handle CORS preflight
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