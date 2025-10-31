import HeroBannerCommon from "@/components/pages/Common/HeroBannerCommon";
import SiteCta from "@/components/pages/Common/SiteCta";
import FaqSection from "@/components/pages/Common/FaqSection";

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
  
   
    
export default function Transloading() { 
const transloadingFaqs = [
  {
    question: "What is transloading, and how does KHM Logistics perform it?",
    answer:
      "Transloading is the process of transferring goods between different transportation modes — such as from ship to truck or rail to truck. KHM Logistics provides seamless transloading services that streamline cargo movement, reduce storage time, and improve overall delivery efficiency.",
  },
  {
    question: "Why should businesses choose transloading instead of direct shipping?",
    answer:
      "Transloading helps lower transportation costs, optimize delivery routes, and improve flexibility. It’s especially beneficial for importers and exporters who need to move freight quickly from ports to inland destinations or distribution centers.",
  },
  {
    question: "Does KHM Logistics offer port-to-warehouse transloading services?",
    answer:
      "Yes. KHM Logistics specializes in port-to-warehouse transloading, efficiently moving containers from major U.S. ports to nearby warehouses or distribution hubs to avoid delays and minimize demurrage costs.",
  },
  {
    question: "Can KHM Logistics handle container unloading and palletization?",
    answer:
      "Absolutely. Our expert team handles full container unloading, palletization, shrink-wrapping, and reloading with precision — ensuring your freight is secure and ready for outbound transport.",
  },
  {
    question: "What types of freight can be transloaded with KHM Logistics?",
    answer:
      "We manage a wide range of cargo types including retail goods, industrial materials, automotive components, and temperature-sensitive freight — all handled safely and in compliance with regulations.",
  },
  {
    question: "Does KHM Logistics provide cross-docking along with transloading?",
    answer:
      "Yes. We offer both transloading and cross-docking solutions to reduce storage time, enhance distribution speed, and streamline your overall supply chain operations.",
  },
  {
    question: "Can KHM Logistics handle oversized or hazardous freight during transloading?",
    answer:
      "Yes. We’re equipped with specialized tools and trained personnel to manage oversized, over-dimensional, or hazardous materials safely during the transloading process.",
  },
  {
    question: "Are KHM Logistics transloading facilities located near major ports and rail terminals?",
    answer:
      "Yes. Our transloading facilities are strategically positioned near key U.S. ports, rail yards, and industrial zones to support efficient freight movement and faster turnaround times.",
  },
  {
    question: "Does KHM Logistics offer short-term storage during transloading?",
    answer:
      "Yes. We provide secure short-term storage and staging areas for goods during transloading to ensure seamless transitions between transportation modes.",
  },
  {
    question: "How does KHM Logistics ensure safety and accuracy during transloading?",
    answer:
      "All transloading operations follow strict safety protocols, including secure loading, real-time GPS tracking, and digital documentation for full visibility and peace of mind.",
  },
  {
    question: "Can KHM Logistics manage both import and export transloading?",
    answer:
      "Yes. We handle both import and export transloading, including container unloading, repacking, customs coordination, and final-mile transportation to your desired destination.",
  },
  {
    question: "Does KHM Logistics provide expedited or same-day transloading?",
    answer:
      "For time-sensitive shipments, KHM Logistics offers expedited and same-day transloading options to keep your operations running without interruption.",
  },
  {
    question: "Can transloading services be integrated with other logistics solutions?",
    answer:
      "Absolutely. Our transloading services can be combined with drayage, warehousing, and last-mile delivery to create a complete, end-to-end logistics solution tailored to your needs.",
  },
  {
    question: "How can I request a quote for KHM Logistics transloading services?",
    answer:
      "You can request a free, no-obligation quote through our Contact page by providing shipment details, container size, and destination — our logistics experts will respond promptly.",
  },
  {
    question: "Why is KHM Logistics the best choice for transloading services?",
    answer:
      "Clients choose KHM Logistics for our nationwide coverage, advanced equipment, skilled team, and commitment to providing fast, reliable, and cost-effective transloading solutions.",
  },
];

  return (
    <>
       <HeroBannerCommon
          bgImage="/images/about/2.png"
          title="Transloading Services" 
          description="KHM Logistics specializes in efficient transloading services that facilitate the seamless transfer of goods between different modes of transportation. Our expert team ensures that your cargo is handled with care, minimizing transit times and reducing costs."         
          overlayOpacity={0.7}
       /> 
       <div className="pt-[50px] lg:pt-[100px]">
            <FaqSection
              title="FAQs — Transloading Services"
              description="Find answers to common questions about our transloading solutions, including cargo transfer between transport modes, storage options, and efficient freight handling for smooth supply chain operations."
              faqs={transloadingFaqs}
              leftImage="/images/faq/faq-bg.png"
            />
            <SiteCta/>
          </div>   
    </>
  );
}
