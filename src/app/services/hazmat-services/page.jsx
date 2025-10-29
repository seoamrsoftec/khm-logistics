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
  
   
    
export default function HazmatServices() { 
  
  return (
    <>
       <HeroBannerCommon
          bgImage="/images/about/2.png"
          title="Hazmat Services" 
          description="KHM Logistics provides specialized hazmat services to ensure the safe and compliant transportation of hazardous materials. Our experienced team adheres to all regulatory requirements, offering tailored solutions to meet your specific needs while prioritizing safety and efficiency."         
          overlayOpacity={0.7}
       />   
    </>
  );
}
