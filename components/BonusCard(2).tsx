
'use client';

export default function BonusCard() {
  return (
    <div className="mb-4">
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg p-3 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <i className="ri-flashlight-line text-white text-sm"></i>
            </div>
            <span className="text-white font-medium text-base">Radissonbet 1.000 TL Bonus</span>
          </div>
          <button className="bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-full text-xs font-medium transition-colors">
            Bonusu Al
          </button>
        </div>
      </div>
    </div>
  );
}
