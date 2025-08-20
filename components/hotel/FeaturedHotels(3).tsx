
'use client';

const featuredHotels = [
  {
    name: 'Grand Palace Istanbul',
    location: 'Sultanahmet, İstanbul',
    price: '₺2,450',
    rating: 4.9,
    reviews: 1247,
    image: 'https://readdy.ai/api/search-image?query=Luxury%205-star%20hotel%20in%20Istanbul%2C%20elegant%20Ottoman%20palace%20style%20architecture%2C%20beautiful%20hotel%20exterior%20with%20historical%20design%2C%20premium%20accommodation%2C%20professional%20hotel%20photography%2C%20grand%20entrance%20with%20marble%20columns%2C%20upscale%20Turkish%20hospitality%2C%20evening%20lighting&width=300&height=200&seq=istanbul1&orientation=landscape',
    features: ['Ücretsiz WiFi', 'Spa', 'Havuz']
  },
  {
    name: 'Antalya Beach Resort',
    location: 'Konyaaltı, Antalya',
    price: '₺1,890',
    rating: 4.7,
    reviews: 892,
    image: 'https://readdy.ai/api/search-image?query=Beautiful%20beach%20resort%20hotel%20in%20Antalya%2C%20Mediterranean%20seaside%20accommodation%2C%20luxury%20hotel%20with%20beach%20access%2C%20palm%20trees%20and%20turquoise%20sea%2C%20resort%20architecture%20with%20modern%20design%2C%20professional%20hotel%20photography%2C%20beachfront%20property%2C%20Turkish%20Riviera&width=300&height=200&seq=antalya1&orientation=landscape',
    features: ['Plaj', 'All-Inclusive', 'Çocuk Kulübü']
  },
  {
    name: 'Cappadocia Cave Hotel',
    location: 'Göreme, Kapadokya',
    price: '₺3,200',
    rating: 4.8,
    reviews: 654,
    image: 'https://readdy.ai/api/search-image?query=Unique%20cave%20hotel%20in%20Cappadocia%2C%20traditional%20stone%20architecture%2C%20boutique%20accommodation%20carved%20into%20rock%20formations%2C%20authentic%20Turkish%20cave%20dwelling%20hotel%2C%20professional%20hotel%20photography%2C%20fairy%20chimneys%20landscape%2C%20sunset%20lighting%2C%20luxury%20cave%20suite&width=300&height=200&seq=cappadocia1&orientation=landscape',
    features: ['Balon Turu', 'Mağara Odası', 'Terras']
  }
];

export default function FeaturedHotels() {
  return (
    <div className="px-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-slate-800 font-bold text-xl">Öne Çıkan Oteller</h2>
        <button className="text-blue-600 font-medium text-sm">Tümünü Gör</button>
      </div>
      
      <div className="space-y-4">
        {featuredHotels.map((hotel, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <img 
                src={hotel.image} 
                alt={hotel.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                <i className="ri-star-fill text-yellow-500 text-sm"></i>
                <span className="text-slate-700 text-sm font-medium">{hotel.rating}</span>
              </div>
            </div>
            
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-slate-800 font-bold text-lg mb-1">{hotel.name}</h3>
                  <div className="flex items-center text-slate-500 text-sm mb-2">
                    <i className="ri-map-pin-line mr-1"></i>
                    <span>{hotel.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-blue-600 font-bold text-xl">{hotel.price}</div>
                  <div className="text-slate-500 text-sm">gece</div>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-xs"></i>
                  ))}
                </div>
                <span className="text-slate-500 text-sm">({hotel.reviews} değerlendirme)</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {hotel.features.map((feature, idx) => (
                  <span key={idx} className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full font-medium">
                    {feature}
                  </span>
                ))}
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-600 transition-all">
                Rezervasyon Yap
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
