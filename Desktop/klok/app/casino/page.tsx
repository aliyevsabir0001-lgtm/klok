
'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import BonusCard from '@/components/BonusCard';
import CasinoList from '@/components/CasinoList';

export default function CasinoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <Header />
      
      <div className="pt-16 pb-20 px-4">
        <BonusCard />
        <CasinoList />
      </div>

      <TabBar />
    </div>
  );
}
