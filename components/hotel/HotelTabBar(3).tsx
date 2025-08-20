
'use client';

import Link from 'next/link';

export default function HotelTabBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-lg">
      <div className="grid grid-cols-5 py-2">
        <button className="flex flex-col items-center justify-center py-3 text-blue-600">
          <div className="w-6 h-6 flex items-center justify-center mb-1">
            <i className="ri-building-3-line text-lg"></i>
          </div>
          <span className="text-xs font-medium">Oteller</span>
        </button>
        
        <button className="flex flex-col items-center justify-center py-3 text-slate-400">
          <div className="w-6 h-6 flex items-center justify-center mb-1">
            <i className="ri-search-line text-lg"></i>
          </div>
          <span className="text-xs">Keşfet</span>
        </button>
        
        <button className="flex flex-col items-center justify-center py-3 text-slate-400">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center mb-1 shadow-lg">
            <i className="ri-heart-3-line text-white text-xl"></i>
          </div>
          <span className="text-xs">Favoriler</span>
        </button>
        
        <button className="flex flex-col items-center justify-center py-3 text-slate-400">
          <div className="w-6 h-6 flex items-center justify-center mb-1">
            <i className="ri-calendar-check-line text-lg"></i>
          </div>
          <span className="text-xs">Rezervasyonlar</span>
        </button>
        
        <button className="flex flex-col items-center justify-center py-3 text-slate-400">
          <div className="w-6 h-6 flex items-center justify-center mb-1">
            <i className="ri-user-3-line text-lg"></i>
          </div>
          <span className="text-xs">Profil</span>
        </button>
      </div>
    </div>
  );
}