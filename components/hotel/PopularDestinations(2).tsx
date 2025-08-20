
'use client';

const destinations = [
  {
    name: 'İstanbul',
    hotels: '2,456 otel',
    image: 'https://readdy.ai/api/search-image?query=Istanbul%20city%20skyline%20with%20Hagia%20Sophia%20and%20Blue%20Mosque%2C%20beautiful%20Turkish%20architecture%2C%20Bosphorus%20view%2C%20historical%20monuments%2C%20professional%20travel%20photography%2C%20sunset%20golden%20hour%20lighting%2C%20iconic%20Istanbul%20landmarks%2C%20tourism%20destination&width=200&height=150&seq=istanbul2&orientation=landscape'
  },
  {
    name: 'Antalya',
    hotels: '1,834 otel',
    image: 'https://readdy.ai/api/search-image?query=Antalya%20Mediterranean%20coastline%2C%20beautiful%20Turkish%20Riviera%20beaches%2C%20turquoise%20sea%20and%20mountains%2C%20resort%20destination%2C%20professional%20travel%20photography%2C%20sunny%20weather%2C%20palm%20trees%2C%20coastal%20tourism%2C%20beach%20vacation&width=200&height=150&seq=antalya2&orientation=landscape'
  },
  {
    name: 'Kapadokya',
    hotels: '892 otel',
    image: 'https://readdy.ai/api/search-image?query=Cappadocia%20fairy%20chimneys%20landscape%2C%20hot%20air%20balloons%20in%20sky%2C%20unique%20rock%20formations%2C%20sunrise%20view%2C%20professional%20travel%20photography%2C%20magical%20Turkish%20landscape%2C%20geological%20formations%2C%20tourism%20destination&width=200&height=150&seq=cappadocia2&orientation=landscape'
  },
  {
    name: 'Bodrum',
    hotels: '1,245 otel',
    image: 'https://readdy.ai/api/search-image?query=Bodrum%20marina%20and%20castle%2C%20beautiful%20Aegean%20sea%20coastline%2C%20white%20houses%20with%20blue%20windows%2C%20Mediterranean%20architecture%2C%20professional%20travel%20photography%2C%20luxury%20yacht%20harbor%2C%20Turkish%20coastal%20town&width=200&height=150&seq=bodrum&orientation=landscape'
  }
];

export default function PopularDestinations() {
  return (
    <div className="px-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-slate-800 font-bold text-xl">Popüler Destinasyonlar</h2>
        <button className="text-blue-600 font-medium text-sm">Tümünü Gör</button>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {destinations.map((destination, index) => (
          <div key={index} className="relative rounded-2xl overflow-hidden h-32 bg-gradient-to-t from-black/60 to-transparent">
            <img 
              src={destination.image} 
              alt={destination.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-3 left-3 right-3">
              <h3 className="text-white font-bold text-lg mb-1">{destination.name}</h3>
              <p className="text-white/90 text-sm">{destination.hotels}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
