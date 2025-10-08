export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Only serve API endpoint
    if (url.pathname === '/api/listings') {
      const listings = [
        { name: 'Luxury Beach Villa', details: '3 Beds • 2 Baths • Ocean View', image: '/assets/images/villa.jpg' },
        { name: 'Cozy Mountain Cabin', details: '2 Beds • 1 Bath • Forest Retreat', image: '/assets/images/cabin.jpg' },
        { name: 'City Apartment Downtown', details: '1 Bed • 1 Bath • Central Location', image: '/assets/images/apartment.jpg' }
      ];

      return new Response(JSON.stringify(listings), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // All other paths return 404
    return new Response('Endpoint not found', { status: 404 });
  }
};