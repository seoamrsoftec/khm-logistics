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
  
   
    
export default function SupplyChain() { 
  
  return (
    <>
       <HeroBannerCommon
          bgImage="/images/about/2.png"
          title="Supply Chain Services" 
          description="At KHM Logistics, we offer end-to-end supply chain solutions designed to optimize your logistics operations. From freight transportation to inventory management, our comprehensive services ensure seamless integration and efficiency across your entire supply chain."         
          overlayOpacity={0.7}
       />   
    </>
  );
}
