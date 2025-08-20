import type { Metadata } from "next";
import { Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifico'
});

export const metadata: Metadata = {
  title: "Casino Deneme Bonusu 2024 - En Güvenilir Casino Siteleri",
  description: "En güvenilir casino sitelerinde deneme bonusu fırsatları! 1500₺ casino bonusu, slot oyunları, rulet, poker. Güvenilir bahis siteleri ve casino oyunları. Hemen üye ol, bonusunu kazan!",
  keywords: "casino deneme bonusu, casino siteleri, güvenilir casino, slot oyunları, rulet oyunu, poker oyunları, bahis bonusu, casino oyunları, online casino, casino bonusu veren siteler, bedava casino bonusu, casino deneme bonusu veren siteler",
  authors: [{ name: "Casino Rehber" }],
  creator: "Casino Bonus Rehberi",
  publisher: "En İyi Casino Siteleri",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://goldleafresort.net',
    siteName: 'Casino Deneme Bonusu Rehberi',
    title: 'Casino Deneme Bonusu 2024 - En Güvenilir Casino Siteleri',
    description: 'En güvenilir casino sitelerinde deneme bonusu kazan! Slot, rulet, poker oyunları. 1500₺ bonus fırsatları. Hemen başla!',
    images: [
      {
        url: 'https://readdy.ai/api/search-image?query=casino%20bonus%20cards%20with%20golden%20coins%2C%20slot%20machine%20symbols%2C%20poker%20chips%20and%20dice%2C%20luxury%20casino%20atmosphere%2C%20dark%20elegant%20background%2C%20professional%20gambling%20graphics&width=1200&height=630&seq=og-casino-bonus&orientation=landscape',
        width: 1200,
        height: 630,
        alt: 'Casino Deneme Bonusu - En Güvenilir Casino Siteleri',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casino Deneme Bonusu 2024 | En İyi Casino Siteleri',
    description: 'Güvenilir casino sitelerinde deneme bonusu fırsatları! Slot, rulet, poker oyunları ile kazanmaya başla.',
    images: ['https://readdy.ai/api/search-image?query=casino%20bonus%20cards%20with%20golden%20coins%2C%20slot%20machine%20symbols%2C%20poker%20chips%20and%20dice%2C%20luxury%20casino%20atmosphere%2C%20dark%20elegant%20background%2C%20professional%20gambling%20graphics&width=1200&height=630&seq=twitter-casino&orientation=landscape'],
  },
  alternates: {
    canonical: 'https://goldleafresort.net',
  },
  category: 'gambling',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning={true}>
      <head>
        <link 
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" 
          rel="stylesheet" 
        />
        <link rel="canonical" href="https://goldleafresort.net" />
        <meta name="geo.region" content="TR" />
        <meta name="geo.country" content="Turkey" />
        <meta name="language" content="Turkish" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="1 days" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Casino Deneme Bonusu Rehberi",
              "url": "https://goldleafresort.net",
              "description": "En güvenilir casino sitelerinde deneme bonusu fırsatları. Casino oyunları, slot makineleri, rulet ve poker oyunları.",
              "publisher": {
                "@type": "Organization",
                "name": "Casino Bonus Rehberi"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://goldleafresort.net/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={`antialiased ${pacifico.variable}`}>
        {children}
      </body>
    </html>
  );
}