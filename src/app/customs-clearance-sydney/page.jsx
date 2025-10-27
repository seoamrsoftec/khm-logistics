import BannerHeroInnerPage from "@/components/InnerPages/BannerHeroInnerPage";
import FAQSection from "@/components/InnerPages/FAQSection";
import TopContent from "@/components/InnerPages/TopContent";
import WhyChoose from "@/components/InnerPages/WhyChoose";
import FinalCTA from "@/components/sections/FinalCTA";
import TestimonialSlider from "@/components/sections/TestimonialSlider";
export async function generateMetadata() {
    const siteUrl = 'https://www.sydneycontainer.com.au';
    const title = 'Customs Clearance Services | Fast & Hassle‑Free Import Export Solutions';
    const description = 'Looking for customs clearance services? Our experienced brokers handle all documentation, duties, and compliance to ensure your shipments clear quickly and cost‑effectively.';
    return {
        title, description,
        alternates: {
          canonical: `${siteUrl}/customs-clearance-sydney`,
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
      title: "Licensed Customs Brokers",
      description: "Our experts have in‑depth knowledge of regulations and handle all compliance requirements on your behalf."
    },
    {
      title: "Fast & Hassle‑Free Clearance",
      description: "We process shipments quickly to avoid unnecessary delays, penalties, and storage charges."
    },
    {
      title: "Tailored Import & Export Solutions",
      description: "Whether it’s a one‑off shipment or ongoing trade, we provide clearance services suited to your business needs."
    },
    {
      title: "Integrated Logistics Support",
      description: "In addition to clearance, we offer freight forwarding, warehousing, and transport for complete supply chain management."
    }
  ];


 const faqs = [
  {
    question: "What is customs clearance?",
    answer: "It’s the process of preparing and submitting paperwork required by government authorities for imports and exports."
  },
  {
    question: "Do I need a customs broker?",
    answer: "While you can handle it yourself, using a broker ensures compliance, saves time, and reduces the risk of costly mistakes."
  },
  {
    question: "What documents are usually required?",
    answer: "Key documents include invoices, packing lists, bills of lading, certificates of origin, and permits (if applicable)."
  },
  {
    question: "Can you calculate duties and taxes?",
    answer: "Yes, we classify goods correctly and calculate applicable duties and GST to give you accurate landed costs."
  },
  {
    question: "Do you handle both imports and exports?",
    answer: "Yes, we provide clearance services for shipments entering and leaving the country."
  },
  {
    question: "Can you clear cargo at airports and seaports?",
    answer: "Yes, we work with customs authorities at major international gateways for fast clearance."
  },
  {
    question: "What if customs holds my shipment?",
    answer: "Our team communicates directly with customs to resolve issues quickly and secure the release of your goods."
  },
  {
    question: "Do you provide bonded storage?",
    answer: "Yes, bonded warehousing can be arranged for goods awaiting duty payment or customs clearance."
  },
  {
    question: "How do you stay updated with regulations?",
    answer: "Our brokers monitor tariff updates, trade agreements, and industry changes to ensure your shipments remain compliant."
  },
  {
    question: "How do I get a quote for customs clearance?",
    answer: "Provide us with your shipment details, documents, and destination, and we’ll prepare a tailored clearance solution."
  }
];
export default function HomePage() {
  return (
    <>
       <BannerHeroInnerPage
            H1="Customs Clearance Services in Sydney"
            H2Span="Trusted Customs Clearance"
            H2="Services Worldwide."
            Content="From tariff management to clearance paperwork, we keep your shipments compliant and on schedule, minimizing risks and costs."
        />
        <TopContent
            title="Services"
            titlespan="Customs Clearance"
            subtitle="Clear Customs. Clear Business"
            photo="/images/customs-clearance/customs-clearance.jpg"
            topparagraph="International trade comes with strict rules, regulations, and documentation requirements. Without expert support, businesses often face delays, penalties, or unexpected costs. Our Customs Clearance Services are designed to make the process seamless, ensuring your shipments are cleared quickly and in full compliance with current laws."

            topcontent={`<p>We handle everything from preparing documentation and calculating duties to managing permits and liaising with border authorities. With experienced customs brokers on your side, you can avoid costly mistakes, speed up cargo release, and keep your supply chain moving without disruption.</p>

            <p>Whether you’re importing raw materials, exporting finished goods, or moving specialized cargo, our tailored solutions make customs clearance simple, reliable, and stress‑free.</p>`}
        />
        <WhyChoose
        title="OUR CUSTOMS CLEARANCE SERVICES"
        titlecontent="Choosing the right customs partner means your shipments move faster and more cost‑effectively. Here’s why clients trust us:"
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
