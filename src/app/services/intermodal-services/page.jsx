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
  
   
    
export default function IntermodalServices() { 
  
  return (
    <>
       <HeroBannerCommon
          bgImage="/images/about/2.png"
          title="Intermodal Services" 
          description="KHM Logistics provides comprehensive intermodal services that combine multiple modes of transportation to deliver cost-effective and efficient logistics solutions. Our expertise in coordinating rail, truck, and sea transport ensures your cargo reaches its destination safely and on time."         
          overlayOpacity={0.7}
       />   
    </>
  );
}
