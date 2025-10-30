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
  
   
    
export default function SupplyChain() { 
const supplychainFaqs = [
  {
    question: "What logistics services does KHM Logistics provide?",
    answer:
      "KHM Logistics offers comprehensive logistics solutions, including FTL and LTL trucking, warehousing, transloading, drayage, cross-docking, and last-mile delivery across the USA.",
  },
  {
    question: "Can KHM Logistics manage end-to-end logistics operations?",
    answer:
      "Yes, we provide complete end-to-end logistics management — from pickup and transportation to warehousing, distribution, and delivery — ensuring a seamless flow of goods.",
  },
  {
    question: "Does KHM Logistics offer real-time shipment tracking?",
    answer:
      "Absolutely. Every shipment is equipped with GPS-enabled tracking, allowing clients to monitor their cargo in real time and receive live updates on delivery status.",
  },
  {
    question: "Can KHM Logistics handle international logistics?",
    answer:
      "Yes, we coordinate both domestic and international logistics, including port drayage, customs coordination, and transportation to final destinations nationwide.",
  },
  {
    question: "What industries does KHM Logistics serve?",
    answer:
      "We serve diverse industries such as retail, manufacturing, automotive, e-commerce, construction, and healthcare, providing customized logistics solutions for each sector.",
  },
  {
    question: "Does KHM Logistics offer same-day or expedited logistics services?",
    answer:
      "Yes, for urgent shipments, we provide same-day and expedited logistics options to ensure your goods reach their destination without delay.",
  },
  {
    question: "How does KHM Logistics ensure shipment safety and compliance?",
    answer:
      "All shipments are handled by licensed drivers under strict FMCSA and DOT regulations, using advanced safety measures, secure loading, and continuous monitoring.",
  },
  {
    question: "Can I get temperature-controlled logistics solutions?",
    answer:
      "Yes, we provide refrigerated and temperature-controlled logistics services to protect perishable, pharmaceutical, and sensitive goods throughout transport.",
  },
  {
    question: "Does KHM Logistics provide warehouse and storage options?",
    answer:
      "We offer secure, strategically located warehouses for short-term and long-term storage, cross-docking, inventory management, and order fulfillment.",
  },
  {
    question: "Can I schedule recurring or contract-based logistics services?",
    answer:
      "Yes. We provide recurring logistics plans and long-term contracts for businesses that require regular or predictable transportation schedules.",
  },
  {
    question: "What regions does KHM Logistics operate in?",
    answer:
      "We operate nationwide across the United States, covering major ports, industrial zones, and regional hubs to ensure complete logistical coverage.",
  },
  {
    question: "Does KHM Logistics provide customized logistics plans?",
    answer:
      "Every business is different. We create flexible and tailored logistics plans that align with your company’s goals, volume, routes, and budget.",
  },
  {
    question: "Can KHM Logistics handle oversized or heavy shipments?",
    answer:
      "Yes, we have specialized equipment and experienced teams to handle oversized, over-dimensional, or heavy-haul loads safely and efficiently.",
  },
  {
    question: "How can I request a logistics quote from KHM Logistics?",
    answer:
      "You can request a free quote through our Contact page by providing your shipment details, routes, and preferred service type. Our team will respond promptly.",
  },
  {
    question: "Why should I choose KHM Logistics for my logistics needs?",
    answer:
      "Companies trust KHM Logistics for our reliability, transparency, nationwide network, and commitment to delivering efficient, cost-effective logistics solutions.",
  },
];

  
  return (
    <>
       <HeroBannerCommon
          bgImage="/images/about/2.png"
          title="Supply Chain Services" 
          description="At KHM Logistics, we offer end-to-end supply chain solutions designed to optimize your logistics operations. From freight transportation to inventory management, our comprehensive services ensure seamless integration and efficiency across your entire supply chain."         
          overlayOpacity={0.7}
       />  
        <div className="pt-[50px] lg:pt-[100px]">
                 <ServiceSection/>
                 <FaqSection
                   title="FAQs — Services"
                   description="Get answers to the most common questions about our trucking and freight services."
                   faqs={supplychainFaqs}
                   leftImage="/images/faq/faq-bg.png"
                 />
                 <SiteCta/>
              </div> 
    </>
  );
}
