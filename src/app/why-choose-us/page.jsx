import HeroBannerCommon from "@/components/pages/Common/HeroBannerCommon";

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
  
   
    
export default function WhyChooseUs() { 
  
  return (
    <>
       <HeroBannerCommon
          bgImage="/images/about/2.png"
          title="Why Choose Us" 
          description="At KHM Logistics, we pride ourselves on delivering exceptional logistics solutions tailored to meet the unique needs of our clients. Our commitment to excellence, innovative technology, and experienced team ensure that your cargo is handled with the utmost care and efficiency. Choose us for reliable service, competitive pricing, and a partner dedicated to your success."         
          overlayOpacity={0.7}
       />   
    </>
  );
}
