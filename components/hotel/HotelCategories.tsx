
'use client';

const categories = [
  {
    name: 'Lüks Oteller',
    icon: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20luxury%20hotel%20crown%20symbol%2C%20premium%205-star%20accommodation%20icon%2C%20golden%20crown%20with%20hotel%20building%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20vibrant%20gold%20and%20blue%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus&width=100&height=100&seq=luxury&orientation=squarish',
    count: '1,245'
  },
  {
    name: 'Butik Oteller',
    icon: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20boutique%20hotel%20building%2C%20small%20elegant%20accommodation%20icon%2C%20charming%20hotel%20with%20unique%20design%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20vibrant%20purple%20and%20pink%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus&width=100&height=100&seq=boutique&orientation=squarish',
    count: '856'
  },
  {
    name: 'Sahil Otelleri',
    icon: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20beach%20resort%20hotel%2C%20tropical%20accommodation%20with%20palm%20trees%2C%20seaside%20hotel%20building%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20vibrant%20blue%20and%20turquoise%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus&width=100&height=100&seq=beach&orientation=squarish',
    count: '623'
  },
  {
    name: 'Spa Otelleri',
    icon: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20spa%20wellness%20hotel%2C%20relaxation%20and%20wellness%20center%20icon%2C%20hotel%20with%20spa%20facilities%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20vibrant%20green%20and%20mint%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus&width=100&height=100&seq=spa&orientation=squarish',
    count: '432'
  }
];

export default function HotelCategories() {
  return (
    <div className="px-6 mb-8">
      <h2 className="text-slate-800 font-bold text-xl mb-6">Kategoriler</h2>
      
      <div className="grid grid-cols-2 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-2xl overflow-hidden mb-4 mx-auto">
              <img 
                src={category.icon} 
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-slate-800 font-semibold text-center mb-2">{category.name}</h3>
            <p className="text-slate-500 text-sm text-center">{category.count} otel</p>
          </div>
        ))}
      </div>
    </div>
  );
}
