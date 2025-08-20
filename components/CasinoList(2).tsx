
'use client';

const casinos = [
  {
    name: 'RadissonBet',
    logo: 'https://readdy.ai/api/search-image?query=RadissonBet%20casino%20logo%2C%20blue%20and%20white%20brand%20colors%2C%20professional%20casino%20branding%2C%20clean%20modern%20design%2C%20isolated%20on%20dark%20background%2C%20high%20quality&width=140&height=70&seq=radisson&orientation=landscape',
    bonus: '1500 ₺',
    description: 'Deneme Bonusu'
  },
  {
    name: 'Cratos Royal',
    logo: 'https://readdy.ai/api/search-image?query=Cratos%20Royal%20casino%20logo%2C%20gold%20and%20black%20luxury%20branding%2C%20royal%20crown%20symbol%2C%20elegant%20casino%20design%2C%20isolated%20on%20dark%20background%2C%20high%20quality&width=140&height=70&seq=cratos&orientation=landscape',
    bonus: '1500 ₺',
    description: 'Deneme Bonusu'
  },
  {
    name: 'ExonBet',
    logo: 'https://readdy.ai/api/search-image?query=ExonBet%20casino%20logo%2C%20modern%20cyan%20and%20dark%20blue%20branding%2C%20sleek%20technology%20design%2C%20casino%20gaming%20logo%2C%20isolated%20on%20dark%20background%2C%20high%20quality&width=140&height=70&seq=exon&orientation=landscape',
    bonus: '750 ₺',
    description: 'Deneme Bonus'
  },
  {
    name: 'Ramadabet',
    logo: 'https://readdy.ai/api/search-image?query=Ramadabet%20casino%20logo%2C%20red%20and%20black%20bold%20branding%2C%20modern%20casino%20design%2C%20professional%20gambling%20logo%2C%20isolated%20on%20dark%20background%2C%20high%20quality&width=140&height=70&seq=ramada&orientation=landscape',
    bonus: '800 ₺',
    description: 'Deneme Bonusu'
  },
  {
    name: 'Superbet',
    logo: 'https://readdy.ai/api/search-image?query=Superbet%20casino%20logo%2C%20orange%20and%20yellow%20vibrant%20branding%2C%20energetic%20sports%20betting%20design%2C%20bold%20casino%20logo%2C%20isolated%20on%20dark%20background%2C%20high%20quality&width=140&height=70&seq=super&orientation=landscape',
    bonus: '1500 ₺',
    description: 'Deneme Bonusu'
  },
  {
    name: 'Starzbet',
    logo: 'https://readdy.ai/api/search-image?query=Starzbet%20casino%20logo%2C%20purple%20and%20silver%20star%20branding%2C%20elegant%20casino%20design%2C%20star%20symbol%20logo%2C%20isolated%20on%20dark%20background%2C%20high%20quality&width=140&height=70&seq=starz&orientation=landscape',
    bonus: '250 ₺',
    description: 'Deneme Bonusu'
  },
  {
    name: 'Spinco',
    logo: 'https://readdy.ai/api/search-image?query=Spinco%20casino%20logo%2C%20green%20clover%20leaf%20branding%2C%20lucky%20casino%20design%2C%20four%20leaf%20clover%20symbol%2C%20isolated%20on%20dark%20background%2C%20high%20quality&width=140&height=70&seq=spinco&orientation=landscape',
    bonus: '5000 ₺',
    description: 'Deneme Bonusu'
  },
  {
    name: 'Betwoon',
    logo: 'https://readdy.ai/api/search-image?query=Betwoon%20casino%20logo%2C%20green%20and%20white%20modern%20branding%2C%20clean%20sports%20betting%20design%2C%20professional%20casino%20logo%2C%20isolated%20on%20dark%20background%2C%20high%20quality&width=140&height=70&seq=betwoon&orientation=landscape',
    bonus: '777 ₺',
    description: 'Deneme Bonusu'
  },
  {
    name: 'Grand Pasha',
    logo: 'https://readdy.ai/api/search-image?query=Grand%20Pasha%20casino%20logo%2C%20gold%20and%20black%20luxury%20branding%2C%20Ottoman%20palace%20inspired%20design%2C%20elegant%20casino%20logo%2C%20isolated%20on%20dark%20background%2C%20high%20quality&width=140&height=70&seq=pasha&orientation=landscape',
    bonus: '1000 ₺',
    description: 'Deneme Bonusu'
  },
  {
    name: 'Palacebet',
    logo: 'https://readdy.ai/api/search-image?query=Palacebet%20casino%20logo%2C%20royal%20palace%20branding%2C%20luxury%20gold%20and%20purple%20design%2C%20elegant%20casino%20logo%2C%20isolated%20on%20dark%20background%2C%20high%20quality&width=140&height=70&seq=palace&orientation=landscape',
    bonus: '1500 ₺',
    description: 'Deneme Bonusu'
  }
];

export default function CasinoList() {
  return (
    <div className="space-y-2 mb-6">
      {casinos.map((casino, index) => (
        <div key={index} className="bg-slate-800/60 backdrop-blur-sm rounded-lg p-3 border border-slate-700/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-18 h-9 bg-slate-700 rounded overflow-hidden">
                <img 
                  src={casino.logo} 
                  alt={casino.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-white font-medium text-base">{casino.bonus}</div>
                <div className="text-slate-400 text-xs">{casino.description}</div>
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-full text-xs font-medium transition-colors flex items-center space-x-1">
              <span>Bonusu Al</span>
              <i className="ri-external-link-line text-xs"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
