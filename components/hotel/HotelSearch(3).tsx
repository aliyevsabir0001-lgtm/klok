
'use client';

import { useState } from 'react';

export default function HotelSearch() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 Misafir');

  return (
    <div className="px-6 mb-8">
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
        <h2 className="text-slate-800 font-semibold text-lg mb-4">Otel Ara</h2>
        
        <div className="space-y-4">
          <div>
            <label className="text-slate-600 text-sm font-medium block mb-2">Şehir veya Otel</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center">
                <i className="ri-map-pin-line text-slate-400"></i>
              </div>
              <input
                type="text"
                placeholder="Nereye gitmek istiyorsunuz?"
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none text-slate-700 bg-slate-50"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-slate-600 text-sm font-medium block mb-2">Giriş</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 flex items-center justify-center">
                  <i className="ri-calendar-line text-slate-400 text-sm"></i>
                </div>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none text-slate-700 bg-slate-50 text-sm"
                />
              </div>
            </div>
            
            <div>
              <label className="text-slate-600 text-sm font-medium block mb-2">Çıkış</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 flex items-center justify-center">
                  <i className="ri-calendar-line text-slate-400 text-sm"></i>
                </div>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none text-slate-700 bg-slate-50 text-sm"
                />
              </div>
            </div>
          </div>
          
          <div>
            <label className="text-slate-600 text-sm font-medium block mb-2">Misafir Sayısı</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center">
                <i className="ri-user-3-line text-slate-400"></i>
              </div>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none text-slate-700 bg-slate-50 appearance-none"
              >
                <option>1 Misafir</option>
                <option>2 Misafir</option>
                <option>3 Misafir</option>
                <option>4 Misafir</option>
                <option>5+ Misafir</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 flex items-center justify-center">
                <i className="ri-arrow-down-s-line text-slate-400"></i>
              </div>
            </div>
          </div>
          
          <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg">
            Otel Ara
          </button>
        </div>
      </div>
    </div>
  );
}
