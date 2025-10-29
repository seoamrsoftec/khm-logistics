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
  
   
    
export default function TransloadingServices() { 
  
  return (
    <>
       <HeroBannerCommon
          bgImage="/images/about/2.png"
          title="Transloading Services" 
          description="KHM Logistics specializes in efficient transloading services that facilitate the seamless transfer of goods between different modes of transportation. Our expert team ensures that your cargo is handled with care, minimizing transit times and reducing costs."         
          overlayOpacity={0.7}
       />   
    </>
  );
}
