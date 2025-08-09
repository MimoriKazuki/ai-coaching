import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import CrisisSection from '@/components/CrisisSection'
import AuthoritySection from '@/components/AuthoritySection'
import SolutionSection from '@/components/SolutionSection'
import ResultsSection from '@/components/ResultsSection'
import ServiceSection from '@/components/ServiceSection'
import WhyUsSection from '@/components/WhyUsSection'
import AboutSection from '@/components/AboutSection'
import PricingSection from '@/components/PricingSection'
import FAQSection from '@/components/FAQSection'
import FinalCTASection from '@/components/FinalCTASection'
import Footer from '@/components/Footer'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
      
      {/* Structured Data */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "LandBridge",
            "url": "https://landbridge.jp",
            "logo": "https://landbridge.jp/logo.png",
            "description": "AI内製化支援プログラムを提供する企業研修サービス",
            "areaServed": "JP",
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 35.6762,
                "longitude": 139.6503
              }
            }
          })
        }}
      />
      
    <main className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <CrisisSection />
      <SolutionSection />
      <ResultsSection />
      <ServiceSection />
      <AuthoritySection />
      <WhyUsSection />
      <AboutSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
    </>
  )
}