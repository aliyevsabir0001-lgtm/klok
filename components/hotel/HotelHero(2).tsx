
'use client';

export default function HotelHero() {
  return (
    <div className="px-6 mb-8">
      <div className="relative rounded-2xl overflow-hidden h-48 bg-gradient-to-r from-blue-600 to-blue-500">
        <img 
          src="https://readdy.ai/api/search-image?query=Luxury%20hotel%20exterior%20with%20beautiful%20architecture%2C%20modern%205-star%20hotel%20building%2C%20elegant%20design%20with%20glass%20facades%20and%20beautiful%20lighting%2C%20evening%20view%2C%20professional%20hotel%20photography%2C%20high-end%20hospitality%2C%20upscale%20accommodation%2C%20premium%20resort%20architecture&width=400&height=200&seq=hotelhero&orientation=landscape"
          alt="Luxury Hotel"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6">
          <h1 className="text-white text-2xl font-bold mb-2">Rüya Tatilinizi Bulun</h1>
          <p className="text-white/90 text-sm">Dünyanın en güzel otellerinde unutulmaz anılar yaşayın</p>
        </div>
      </div>
    </div>
  );
}
