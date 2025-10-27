import FinalCTA from "@/components/sections/FinalCTA";
import TestimonialSlider from "@/components/sections/TestimonialSlider";

import BannerHero from "@/components/pages/Home/BannerHero";

import BannerHeroSlider from "@/components/pages/Home/BannerHeroSlider";
import About from "@/components/pages/Home/About";
import ServicesSectionTwo from "@/components/pages/Home/ServicesSectionTwo";
import WhyChoose from "@/components/pages/Home/WhyChoose";

export async function generateMetadata() {
    const siteUrl = 'https://www.sydneycontainer.com.au';
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
        {/* <About/>
        <ServicesSectionTwo/>
        <WhyChoose/>  
        <FinalCTA/>
        <TestimonialSlider/> */}
    </>
  );
}
