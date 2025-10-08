export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === '/api/listings') {
      const listings = [
        {
          name: 'Luxury Beach Villa',
          details: '3 Beds • 2 Baths • Ocean View',
          image: 'https://cdn.pixabay.com/photo/2016/11/19/14/00/bedroom-1836159_1280.jpg'
        },
        {
          name: 'Cozy Mountain Cabin',
          details: '2 Beds • 1 Bath • Forest Retreat',
          image: 'https://cdn.pixabay.com/photo/2016/11/18/17/42/hotel-1835921_1280.jpg'
        },
        {
          name: 'City Apartment Downtown',
          details: '1 Bed • 1 Bath • Central Location',
          image: 'https://cdn.pixabay.com/photo/2017/08/06/06/29/interior-2590941_1280.jpg'
        },
        {
          name: 'Modern Country House',
          details: '4 Beds • 3 Baths • Large Garden',
          image: 'https://cdn.pixabay.com/photo/2015/09/18/19/16/living-room-939155_1280.jpg'
        }
      ];

      return new Response(JSON.stringify(listings), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*', 
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        },
      });
    }

    // CORS preflight
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