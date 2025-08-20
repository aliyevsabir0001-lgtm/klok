
'use client';

export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mb-1">
              <i className="ri-trophy-line text-white text-lg"></i>
            </div>
            <span className="text-white text-xs">Kazananlar</span>
          </div>
          
          <div className="text-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-1">
              <i className="ri-gift-line text-white text-lg"></i>
            </div>
            <span className="text-white text-xs">Çekilişler</span>
          </div>
          
          <div className="text-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-1">
              <i className="ri-snowflake-line text-white text-lg"></i>
            </div>
            <span className="text-white text-xs">Çark Çevir</span>
          </div>
        </div>
      </div>
    </div>
  );
}
