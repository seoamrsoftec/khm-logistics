

import AboutSection from "@/components/pages/Home/AboutSection";
import BannerHeroSlider from "@/components/pages/Home/BannerHeroSlider";
import ServiceSection from "@/components/pages/Home/ServiceSection";
import StatsSection from "@/components/pages/Home/StatsSection";
import WorkProcessSection from "@/components/pages/Home/WorkProcessSection";

export async function generateMetadata() {
    const siteUrl = 'https://khm-logistics.vercel.app/';
    const title = '';
    const description = '';
    return {
        title, description,
        alternates: {
          canonical: `${siteUrl}`,
        },
        openGraph: {
            title, description,
            siteName: 'KHM Logistics',
            images: [
                {
                url: `${siteUrl}/images/khm-og-image.jpg`,
                width: 1200,
                height: 630,
                },
            ],
            locale: 'en_US',
            type: 'website',
        },
      };
    }
export default function HomePage() {
  return (
    <>
        <BannerHeroSlider/>
        <AboutSection/>
        <ServiceSection/>
        <WorkProcessSection/>
        <StatsSection/>
      
        
    </>
  );
}
