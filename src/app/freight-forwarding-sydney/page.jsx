import BannerHeroInnerPage from "@/components/InnerPages/BannerHeroInnerPage";
import FAQSection from "@/components/InnerPages/FAQSection";
import TopContent from "@/components/InnerPages/TopContent";
import WhyChoose from "@/components/InnerPages/WhyChoose";
import FinalCTA from "@/components/sections/FinalCTA";
import TestimonialSlider from "@/components/sections/TestimonialSlider";
export async function generateMetadata() {
    const siteUrl = 'https://www.sydneycontainer.com.au';
    const title = 'Freight Forwarding Services | Reliable Global Shipping Solutions';
    const description = 'Need trusted freight forwarding services? We provide efficient air, sea, and road freight solutions with customs clearance, tracking, and on‑time delivery worldwide.';
    return {
        title, description,
        alternates: {
          canonical: `${siteUrl}/freight-forwarding-sydney`,
        },
        openGraph: {
            title, description,
            siteName: 'Sydney Container Forwarders',
            images: [
                {
                url: `${siteUrl}/images/container-transport-company-sydney.jpg`,
                width: 1200,
                height: 630,
                },
            ],
            locale: 'en_US',
            type: 'website',
        },
      };
    }
  const whyChoose = [
    {
      title: "End‑to‑End Logistics Management",
      description: "We handle everything from pickup to final delivery, including documentation, customs clearance, and coordination."
    },
    {
      title: "Global Network & Carrier Partnerships",
      description: "Strong relationships with airlines, shipping lines, and transport providers ensure competitive rates and reliable services."
    },
    {
      title: "Tailored Freight Solutions",
      description: "Whether it’s air, sea, or road freight, we design solutions to suit your cargo type, budget, and timeline."
    },
    {
      title: "Visibility & Customer Support",
      description: "With real‑time tracking and dedicated support, you always know where your shipment is and when it will arrive."
    }
  ];

  const faqs = [
    {
      question: "What does a freight forwarder do?",
      answer: "A freight forwarder coordinates the transportation of goods on behalf of shippers, managing logistics, documentation, and delivery."
    },
    {
      question: "Do you handle both imports and exports?",
      answer: "Yes, we provide full freight forwarding services for both inbound and outbound shipments."
    },
    {
      question: "What transport modes do you offer?",
      answer: "We manage sea freight (FCL & LCL), air freight, road transport, and intermodal solutions."
    },
    {
      question: "Can you handle oversized or specialized cargo?",
      answer: "Yes, we offer solutions for heavy, oversized, or out‑of‑gauge cargo that require special handling."
    },
    {
      question: "Do you assist with customs clearance?",
      answer: "Absolutely. We prepare all customs documentation and ensure compliance with import/export regulations."
    },
    {
      question: "Can you provide consolidated shipping?",
      answer: "Yes, we offer LCL and groupage services to help reduce costs for smaller shipments."
    },
    {
      question: "Do you provide freight insurance?",
      answer: "Yes, we offer comprehensive insurance options to protect your cargo during transit."
    },
    {
      question: "How do you ensure competitive freight rates?",
      answer: "Through our global network and carrier partnerships, we negotiate cost‑effective rates for our clients."
    },
    {
      question: "Can you arrange warehousing and distribution?",
      answer: "Yes, we provide integrated solutions including storage, inventory management, and last‑mile delivery."
    },
    {
      question: "How do I request a freight forwarding quote?",
      answer: "Simply provide details such as origin, destination, cargo type, and timeline — we’ll prepare a tailored quote."
    }
  ];
export default function HomePage() {
  return (
    <>
        
        <BannerHeroInnerPage
            H1="Freight Forwarding Services in Sydney"
            H2Span="Complete Freight Forwarding"
            H2="Solutions for Global Businesses."
            Content="From pick-up to customs clearance and delivery, our experienced team ensures smooth, reliable, and affordable transportation of your goods across borders."
        />
        <TopContent
            title="Services"
            titlespan="Freight Forwarding"
            subtitle="Reliable Freight. Anywhere, Anytime."
            photo="/images/freight-forwarding/freight-forwarding-one.jpg"

            topparagraph="Global trade demands reliable, efficient, and cost‑effective logistics. Our Freight Forwarding Services are designed to take the complexity out of shipping, offering businesses complete end‑to‑end solutions for both imports and exports. Whether you require air freight, sea freight, or road transport, our team manages every detail to ensure your cargo moves smoothly from origin to destination."

            topcontent={`<p>From documentation and customs clearance to consolidation, warehousing, and final delivery, we provide a fully managed freight forwarding service. With established partnerships across major carriers and a global logistics network, we deliver flexible and dependable solutions that help businesses streamline supply chains and reduce costs.</p>
            
            <p>Whether it’s a one‑time shipment or ongoing freight requirements, our tailored approach ensures your goods arrive safely, on schedule, and with complete visibility throughout the journey.</p>`}
        />
        <WhyChoose
          title="OUR FREIGHT FORWARDING SERVICES"
          titlecontent="Choosing the right freight forwarder means more than just moving cargo — it means having a trusted logistics partner. Here’s why businesses rely on us:"
          whyChoose={whyChoose}
        />  
        <FAQSection
            faqs={faqs}
        />
        <FinalCTA/>
        <TestimonialSlider/>
    </>
  );
}
