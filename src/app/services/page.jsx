import FaqSection from "@/components/pages/Common/FaqSection";
import HeroBannerCommon from "@/components/pages/Common/HeroBannerCommon";
import ServiceSection from "@/components/pages/Home/ServiceSection";

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
  
   
    
export default function Services() { 
  
  return (
    <>
       <HeroBannerCommon
          bgImage="/images/about/2.png"
          title="Services" 
          description="At KHM Logistics, we pride ourselves on offering a comprehensive suite of logistics and supply chain services tailored to meet the unique needs of our clients. Our expertise spans across various domains, ensuring efficient and reliable solutions for all your logistics requirements."         
          overlayOpacity={0.7}
       />   
       <div className="pt-[50px] lg:pt-[100px]">
          <ServiceSection/>
          <FaqSection
            title="FAQs — KHM Logistics"
            description="Get answers to the most common questions about our trucking and freight services."
            faqs={servicesFaqs}
            leftImage="/images/faq/faq-bg.png"
          />
       </div>
    </>
  );
}
