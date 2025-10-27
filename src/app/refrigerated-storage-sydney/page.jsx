import BannerHeroInnerPage from "@/components/InnerPages/BannerHeroInnerPage";
import FAQSection from "@/components/InnerPages/FAQSection";
import TopContent from "@/components/InnerPages/TopContent";
import WhyChoose from "@/components/InnerPages/WhyChoose";
import FinalCTA from "@/components/sections/FinalCTA";
import TestimonialSlider from "@/components/sections/TestimonialSlider";
export async function generateMetadata() {
    const siteUrl = 'https://www.sydneycontainer.com.au';
    const title = 'Refrigerated Storage Sydney | Secure Cold Storage Solutions';
    const description = 'Looking for refrigerated storage in Sydney? We provide secure, temperature‑controlled storage for perishable goods with 24/7 monitoring and flexible solutions.';
    return {
        title, description,
        alternates: {
          canonical: `${siteUrl}/refrigerated-storage-sydney`,
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
    title: "Advanced Cold Storage Facilities",
    description: "Our warehouses feature modern refrigeration units with precise temperature control for chilled and frozen goods."
  },
  {
    title: "Strict Compliance & Hygiene Standards",
    description: "We follow industry regulations and hygiene protocols to guarantee safe storage for food, pharmaceuticals, and sensitive products."
  },
  {
    title: "Flexible Storage Options",
    description: "From short-term chilled storage to long-term frozen solutions, we provide tailored options for every business."
  },
  {
    title: "Prime Sydney Locations",
    description: "Conveniently located near ports and transport hubs, our facilities ensure fast, efficient, and reliable logistics."
  }
];


const faqs = [
  {
    question: "What products can you store in refrigerated storage?",
    answer: "We store perishable goods including food, beverages, dairy, seafood, pharmaceuticals, and other temperature-sensitive products."
  },
  {
    question: "Do you offer both chilled and frozen storage?",
    answer: "Yes, we provide a range of temperature-controlled options, from chilled to deep-frozen, depending on your requirements."
  },
  {
    question: "Can you handle bulk refrigerated storage?",
    answer: "Absolutely. Our facilities are equipped to handle both small-scale and large bulk storage needs."
  },
  {
    question: "How do you ensure consistent temperatures?",
    answer: "Our facilities use advanced monitoring systems to maintain consistent temperatures and prevent fluctuations."
  },
  {
    question: "Do you provide short-term and long-term refrigerated storage?",
    answer: "Yes, we offer both — whether you need temporary holding or extended cold storage."
  },
  {
    question: "Is your refrigerated storage secure?",
    answer: "Yes, our facilities feature 24/7 surveillance, access control, and strict safety protocols."
  },
  {
    question: "Can you arrange refrigerated transport as well?",
    answer: "Yes, we provide integrated cold chain logistics, including refrigerated storage and transport."
  },
  {
    question: "Do you service both small businesses and large enterprises?",
    answer: "Yes, our refrigerated storage solutions are tailored to suit businesses of all sizes."
  },
  {
    question: "Are your facilities HACCP and industry compliant?",
    answer: "Yes, we comply with all relevant food safety and pharmaceutical storage standards."
  },
  {
    question: "How do I get a refrigerated storage quote?",
    answer: "Simply provide the type of goods, quantity, and storage duration, and we’ll prepare a tailored solution."
  }
];

export default function HomePage() {
  return (
    <>
     <BannerHeroInnerPage
            H1="Refrigerated Storage Services in Sydney"
            H2Span="Professional Refrigerated Storage "
            H2=" Services in Sydney for Perishable & Temperature-Sensitive Goods."
            Content="From chilled to frozen storage, our secure and compliant facilities provide tailored cold storage solutions to keep your products fresh, safe, and ready for distribution."
       />
        <TopContent
            title="Services in Sydneys"
            titlespan="Refrigerated Storage "
            subtitle="Fresh. Safe. Reliable."
            photo="/images/refrigerated-storage/refrigerated-storage.jpg"
            topparagraph="When it comes to storing perishable goods, maintaining the right temperature is critical. Our Refrigerated Storage Services in Sydney are designed to keep your products fresh, safe, and compliant with strict industry standards. Whether you need chilled, frozen, or climate-controlled storage, we provide state-of-the-art facilities equipped with modern technology to protect your goods."
            topcontent={`<p>From food and beverages to pharmaceuticals and sensitive products, we ensure every item is stored under the right conditions. With 24/7 monitoring, strict hygiene practices, and easy access to major Sydney transport hubs, our refrigerated storage solutions are both reliable and convenient.</p>
            
            <p>Whether it’s short-term holding or long-term cold storage, we offer flexible and affordable solutions tailored to meet your business needs.</p>`}
        />
        <WhyChoose
        title="OUR REFRIGERATED STORAGE SERVICES IN SYDNEY"
        titlecontent="Choosing the right refrigerated storage partner ensures your perishable goods remain fresh and protected. Here’s why clients trust us:"
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
