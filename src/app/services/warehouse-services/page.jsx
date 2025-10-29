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
  
   
    
export default function WarehouseServices() { 
  
  return (
    <>
       <HeroBannerCommon
          bgImage="/images/about/2.png"
          title="Warehouse Services" 
          description="KHM Logistics provides state-of-the-art warehouse services to ensure the safe and efficient storage of your goods. Our facilities are equipped with advanced inventory management systems, climate control, and security measures to meet the diverse needs of our clients."         
          overlayOpacity={0.7}
       />   
    </>
  );
}
