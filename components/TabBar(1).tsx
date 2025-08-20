
'use client';

export default function TabBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-slate-700">
      <div className="grid grid-cols-5 py-2">
        <button className="flex flex-col items-center justify-center py-2 text-white">
          <div className="w-6 h-6 flex items-center justify-center mb-1">
            <i className="ri-home-4-line text-lg"></i>
          </div>
          <span className="text-xs">Ana Sayfa</span>
        </button>
        
        <button className="flex flex-col items-center justify-center py-2 text-slate-400">
          <div className="w-6 h-6 flex items-center justify-center mb-1">
            <i className="ri-gift-2-line text-lg"></i>
          </div>
          <span className="text-xs">Şansını Dene</span>
        </button>
        
        <button className="flex flex-col items-center justify-center py-2 text-blue-400">
          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-1">
            <i className="ri-dice-line text-white text-xl"></i>
          </div>
          <span className="text-xs font-medium">Casino Oyunları</span>
        </button>
        
        <button className="flex flex-col items-center justify-center py-2 text-slate-400">
          <div className="w-6 h-6 flex items-center justify-center mb-1">
            <i className="ri-mail-line text-lg"></i>
          </div>
          <span className="text-xs">İletişim</span>
        </button>
        
        <button className="flex flex-col items-center justify-center py-2 text-slate-400">
          <div className="w-6 h-6 flex items-center justify-center mb-1">
            <i className="ri-send-plane-line text-lg"></i>
          </div>
          <span className="text-xs">Telegraf</span>
        </button>
      </div>
      
      <div className="px-3 pb-3 flex justify-center">
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg p-3 w-full max-w-sm">
          <div className="flex items-center justify-center text-center">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <i className="ri-gift-line text-white text-sm"></i>
              </div>
              <span className="text-white font-medium text-sm">Betsalvador 1.000 TL Bonus</span>
            </div>
            <button className="bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-full text-xs font-medium transition-colors ml-2">
              Bonusu Al
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
