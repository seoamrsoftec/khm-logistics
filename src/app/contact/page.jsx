import Contactform from "@/components/pages/contact/contact-form";
import HeroBannerCommon from "@/components/pages/Common/HeroBannerCommon";

export async function generateMetadata() {
  const siteUrl = "https://khm-logistics.vercel.app/";
  const title = "";
  const description = "";
  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}`,
    },
    openGraph: {
      title,
      description,
      siteName: "KHM Logistics",
      images: [
        {
          url: `${siteUrl}/images/khm-og-image.jpg`,
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}

export default function Contact() {
  return (
    <>
      <HeroBannerCommon
        bgImage="/images/about/2.png"
        title="Trucking Services USA – Reliable Freight & Special Equipment | KHM Logistics"
        description="At KHM Logistics, we take pride in delivering dependable and flexible trucking services across the USA. Whether you need standard freight shipping or specialized equipment for unique loads, our experienced team ensures your cargo moves safely, efficiently, and on schedule. Every shipment matters to us — because we handle your freight as if it were our own."
        overlayOpacity={0.7}
      />

      <Contactform />
    </>
  );
}
