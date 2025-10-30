import HeroBannerCommon from "@/components/pages/Common/HeroBannerCommon";
import ServiceSection from "@/components/pages/Home/ServiceSection";
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
  
   
    
export default function WarehouseServices() { 
const warehouseFaqs = [
  {
    question: "What warehousing services does KHM Logistics provide?",
    answer:
      "KHM Logistics offers secure, scalable warehousing solutions including storage, inventory management, order fulfillment, cross-docking, and distribution across multiple U.S. locations.",
  },
  {
    question: "Where are KHM Logistics warehouses located?",
    answer:
      "Our warehouses are strategically located near major ports, rail terminals, and logistics hubs to support fast, efficient distribution across the United States.",
  },
  {
    question: "Does KHM Logistics offer short-term and long-term storage?",
    answer:
      "Yes. We provide both short-term and long-term warehousing options to suit your business needs, whether you require temporary staging or ongoing storage solutions.",
  },
  {
    question: "Can KHM Logistics manage inventory and order fulfillment?",
    answer:
      "Absolutely. We offer advanced inventory management systems, real-time tracking, and end-to-end order fulfillment to keep your supply chain organized and efficient.",
  },
  {
    question: "Is KHM Logistics equipped for temperature-controlled warehousing?",
    answer:
      "Yes. Our temperature-controlled facilities ensure that perishable, pharmaceutical, or sensitive products are stored under optimal conditions throughout their stay.",
  },
  {
    question: "Does KHM Logistics handle e-commerce warehousing?",
    answer:
      "Yes. We provide dedicated e-commerce warehousing and fulfillment services, including pick-and-pack operations and same-day shipping support.",
  },
  {
    question: "How does KHM Logistics ensure warehouse security?",
    answer:
      "All our warehouses feature 24/7 surveillance, access control, and on-site security personnel to ensure maximum protection of stored goods.",
  },
  {
    question: "Can KHM Logistics integrate warehousing with transportation services?",
    answer:
      "Yes. Our warehousing network integrates seamlessly with trucking, transloading, and drayage operations for smooth end-to-end logistics management.",
  },
  {
    question: "Does KHM Logistics offer bonded warehouse facilities?",
    answer:
      "Yes. We offer bonded warehousing for importers and exporters, allowing goods to be stored duty-free until customs clearance is completed.",
  },
  {
    question: "Can I access real-time updates on my inventory?",
    answer:
      "Yes. Our warehouse management systems (WMS) provide clients with real-time inventory visibility, shipment tracking, and data analytics for better control.",
  },
  {
    question: "Does KHM Logistics provide cross-docking in warehouses?",
    answer:
      "Yes. We offer efficient cross-docking operations that reduce handling costs, speed up transfers, and minimize storage time.",
  },
  {
    question: "Can KHM Logistics customize warehouse space for my business?",
    answer:
      "Yes. We design flexible warehousing plans based on your specific storage volume, product type, and operational requirements.",
  },
  {
    question: "How can I reduce logistics costs with KHM Logistics warehousing?",
    answer:
      "Our optimized warehouse locations, technology-driven operations, and scalable storage options help businesses reduce overhead and transportation costs.",
  },
  {
    question: "How do I request a warehouse service quote from KHM Logistics?",
    answer:
      "Simply visit our Contact page and share your storage requirements, duration, and location preferences. Our team will provide a customized quote promptly.",
  },
  {
    question: "Why choose KHM Logistics for warehousing services?",
    answer:
      "Companies rely on KHM Logistics for our secure facilities, nationwide reach, cutting-edge technology, and commitment to fast, reliable, and cost-efficient storage solutions.",
  },
];

  return (
    <>
       <HeroBannerCommon
          bgImage="/images/about/2.png"
          title="Warehouse Services" 
          description="KHM Logistics provides state-of-the-art warehouse services to ensure the safe and efficient storage of your goods. Our facilities are equipped with advanced inventory management systems, climate control, and security measures to meet the diverse needs of our clients."         
          overlayOpacity={0.7}
       /> 
         <div className="pt-[50px] lg:pt-[100px]">
              <ServiceSection/>
              <FaqSection
                title="FAQs — Services"
                description="Get answers to the most common questions about our trucking and freight services."
                faqs={warehouseFaqs}
                leftImage="/images/faq/faq-bg.png"
              />
              <SiteCta/>
            </div>  
    </>
  );
}
