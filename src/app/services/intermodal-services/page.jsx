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
  
   
    
export default function IntermodalServices() { 
const intermodalFaqs = [
  {
    question: "What are intermodal services, and how does KHM Logistics provide them?",
    answer:
      "Intermodal services involve using multiple transportation modes — such as rail, truck, and ship — to move freight efficiently. KHM Logistics specializes in end-to-end intermodal shipping solutions that reduce costs, improve speed, and ensure reliable cargo movement across the U.S.",
  },
  {
    question: "What are the benefits of using intermodal transportation?",
    answer:
      "Intermodal transportation offers cost savings, fuel efficiency, reduced carbon emissions, and increased flexibility. It’s ideal for long-distance shipments that combine rail and truck transport to optimize delivery time and budget.",
  },
  {
    question: "Does KHM Logistics manage rail-to-truck and truck-to-rail transfers?",
    answer:
      "Yes. KHM Logistics provides seamless rail-to-truck and truck-to-rail transfers, ensuring smooth cargo transitions between modes without delays or handling issues.",
  },
  {
    question: "Can KHM Logistics handle containerized intermodal freight?",
    answer:
      "Absolutely. We manage all types of containerized freight, including 20ft, 40ft, and 53ft containers, ensuring secure transfers and compliance with all handling standards.",
  },
  {
    question: "Does KHM Logistics provide intermodal drayage services?",
    answer:
      "Yes. Our intermodal drayage solutions cover short-distance hauls between ports, rail terminals, and warehouses, providing complete coordination within your logistics network.",
  },
  {
    question: "Can KHM Logistics manage time-sensitive intermodal shipments?",
    answer:
      "Yes. We specialize in expedited and time-definite intermodal services, ensuring urgent freight moves quickly and efficiently through integrated scheduling and routing.",
  },
  {
    question: "How does KHM Logistics ensure cargo safety during intermodal transit?",
    answer:
      "We follow strict safety standards, use advanced tracking technology, and coordinate with certified rail and trucking partners to guarantee secure and compliant freight movement.",
  },
  {
    question: "Does KHM Logistics provide real-time tracking for intermodal shipments?",
    answer:
      "Yes. Every intermodal shipment comes with GPS-enabled tracking and milestone updates so clients can monitor cargo in real time across all transport modes.",
  },
  {
    question: "What types of goods can be shipped through intermodal services?",
    answer:
      "We handle a wide variety of freight — including retail products, consumer goods, automotive parts, construction materials, and industrial cargo — through our intermodal network.",
  },
  {
    question: "Can intermodal shipping help reduce transportation costs?",
    answer:
      "Yes. Intermodal shipping often lowers overall transportation costs by combining the affordability of rail with the flexibility of trucking for first and last-mile delivery.",
  },
  {
    question: "Are KHM Logistics intermodal services available nationwide?",
    answer:
      "Yes. KHM Logistics operates a nationwide intermodal network connecting major ports, rail terminals, and distribution hubs across the United States.",
  },
  {
    question: "Can KHM Logistics integrate intermodal shipping with warehousing or transloading?",
    answer:
      "Absolutely. Our intermodal services can be combined with warehousing, cross-docking, and transloading for a complete logistics and supply chain solution.",
  },
  {
    question: "Does KHM Logistics support import and export intermodal operations?",
    answer:
      "Yes. We provide full import and export intermodal services, managing container transfers, customs coordination, and final delivery for global trade shipments.",
  },
  {
    question: "How can I get a quote for intermodal transportation services?",
    answer:
      "You can request a free, no-obligation quote through our Contact page by sharing your shipment details, route preferences, and timeline requirements.",
  },
  {
    question: "Why do companies choose KHM Logistics for intermodal services?",
    answer:
      "Businesses trust KHM Logistics for our nationwide coverage, multimodal expertise, reliable tracking, and commitment to providing efficient, cost-effective intermodal logistics solutions.",
  },
];

  return (
    <>
       <HeroBannerCommon
          bgImage="/images/about/2.png"
          title="Intermodal Services" 
          description="KHM Logistics provides comprehensive intermodal services that combine multiple modes of transportation to deliver cost-effective and efficient logistics solutions. Our expertise in coordinating rail, truck, and sea transport ensures your cargo reaches its destination safely and on time."         
          overlayOpacity={0.7}
       /> 
       <div className="pt-[50px] lg:pt-[100px]">
            <ServiceSection/>
            <FaqSection
              title="FAQs — Services"
              description="Get answers to the most common questions about our trucking and freight services."
              faqs={intermodalFaqs}
              leftImage="/images/faq/faq-bg.png"
            />
            <SiteCta/>
          </div>    
    </>
  );
}
