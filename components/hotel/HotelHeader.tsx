
'use client';

export default function HotelHeader() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center">
            <i className="ri-building-3-line text-white text-lg"></i>
          </div>
          <span className="font-['Pacifico'] text-blue-600 text-xl">HotelLux</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
            <i className="ri-notification-2-line text-slate-600 text-lg"></i>
          </button>
          <button className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center">
            <i className="ri-user-3-line text-white text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
