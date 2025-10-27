import BannerHeroInnerPage from "@/components/InnerPages/BannerHeroInnerPage";
import FAQSection from "@/components/InnerPages/FAQSection";
import TopContent from "@/components/InnerPages/TopContent";
import WhyChoose from "@/components/InnerPages/WhyChoose";
import FinalCTA from "@/components/sections/FinalCTA";
import TestimonialSlider from "@/components/sections/TestimonialSlider";
export async function generateMetadata() {
    const siteUrl = 'https://www.sydneycontainer.com.au';
    const title = 'Cargo Storage Services Sydney | Secure & Flexible Storage Solutions';
    const description = 'Need reliable cargo storage in Sydney? We offer safe, flexible short‑term and long‑term storage for all types of cargo, with 24/7 security, easy access, and affordable rates.';
    return {
        title, description,
        alternates: {
          canonical: `${siteUrl}/cargo-storage-sydney`,
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
    title: "Secure & Monitored Facilities",
    description: "We offer modern storage yards and warehouses with CCTV, access control, and 24/7 surveillance for complete peace of mind."
  },
  {
    title: "Flexible Storage Options",
    description: "From short-term holding to long-term bulk storage, we provide solutions tailored to your cargo type and timeframe."
  },
  {
    title: "Prime Sydney Locations",
    description: "Our facilities are strategically located near ports and highways, ensuring faster handling and efficient distribution."
  },
  {
    title: "Professional Handling & Equipment",
    description: "With forklifts, cranes, and experienced staff, we manage all types of cargo — from palletized goods to heavy and oversized loads."
  },
];

const faqs = [
  {
    question: "What types of cargo can you store?",
    answer: "We store palletized goods, bulk cargo, oversized shipments, containers, and general freight across various industries."
  },
  {
    question: "Do you provide both short-term and long-term storage?",
    answer: "Yes, our cargo storage services are flexible — ranging from a few days to several months or more."
  },
  {
    question: "Is my cargo safe in your facility?",
    answer: "Absolutely. Our facilities are monitored 24/7 with CCTV, alarms, and controlled access to ensure maximum security."
  },
  {
    question: "Can you handle oversized or heavy cargo?",
    answer: "Yes, we have the equipment and expertise to store oversized, out-of-gauge, and heavy shipments."
  },
  {
    question: "Do you provide bonded storage for imports?",
    answer: "Yes, bonded storage can be arranged for imported cargo requiring customs clearance."
  },
  {
    question: "How close are your cargo storage facilities to Sydney ports?",
    answer: "Our yards and warehouses are located near Sydney’s major ports and transport hubs for fast and easy access."
  },
  {
    question: "Do you provide cargo handling services?",
    answer: "Yes, our team provides lifting, loading, unloading, and distribution support for all stored cargo."
  },
  {
    question: "Can you transport cargo to and from the storage facility?",
    answer: "Yes, we provide integrated transport and storage solutions for seamless logistics."
  },
  {
    question: "Is insurance included with cargo storage?",
    answer: "Yes, all stored cargo is covered under our facility’s insurance, with additional options available."
  },
  {
    question: "How do I request a storage quote?",
    answer: "Simply provide your cargo type, storage duration, and any special requirements, and our team will prepare a tailored quote."
  }
];
export default function HomePage() {
  return (
    <>
      <BannerHeroInnerPage
        H1="Cargo Storage Services in Sydney"
        H2Span="Professional Cargo Storage"
        H2="Services in Sydney for Businesses & Individuals."
        Content="From short-term holding to long-term warehousing, our secure and strategically located facilities provide flexible cargo storage solutions designed to keep your goods safe, accessible, and ready when you need them."
      />
      <TopContent
        title="Services in Sydney"
        titlespan="Cargo Storage"
        subtitle="Safe. Secure. Efficient."
        photo="/images/cargo-storage/cargo-storage-one.jpg"
        topparagraph="When it comes to handling freight, having a safe and reliable place to store your cargo is just as important as transporting it. Our Cargo Storage Services in Sydney are designed to give businesses and individuals secure, flexible, and cost-effective storage solutions for all types of goods. Whether you need a short-term holding area between shipments or long-term warehousing for bulk cargo, our facilities are equipped to handle it all.
        "
        topcontent={`<p>Located near Sydney’s major ports and transport hubs, our storage yards and warehouses make it easier to streamline logistics. With 24/7 security monitoring, professional handling, and easy access for trucks and containers, we ensure your cargo is safe, organized, and ready for dispatch whenever you need it. From palletized freight to oversized shipments, we provide tailored solutions to suit every storage requirement.</p>
          `}
      />
      <WhyChoose
      title="OUR CARGO STORAGE SERVICES IN SYDNEY"
      titlecontent="Choosing us for your cargo storage means you get convenience, security, and flexibility all in one place. Here’s why our clients trust us:"
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
