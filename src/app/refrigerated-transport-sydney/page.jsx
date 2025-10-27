
import BannerHeroInnerPage from "@/components/InnerPages/BannerHeroInnerPage";
import FAQSection from "@/components/InnerPages/FAQSection";
import TopContent from "@/components/InnerPages/TopContent";
import WhyChoose from "@/components/InnerPages/WhyChoose";
import FinalCTA from "@/components/sections/FinalCTA";
import TestimonialSlider from "@/components/sections/TestimonialSlider";
export async function generateMetadata() {
    const siteUrl = 'https://www.sydneycontainer.com.au';
    const title = 'Refrigerated Transport Services Sydney | Reliable Cold Chain Logistics';
    const description = 'Looking for refrigerated transport in Sydney? We provide safe, reliable, and temperature‑controlled transport for perishable goods. On‑time delivery with 24/7 support.';
    return {
        title, description,
        alternates: {
          canonical: `${siteUrl}/refrigerated-transport-sydney`,
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
    title: "Reliable Cold Chain Management",
    description: "We maintain consistent temperature control throughout the entire journey, ensuring freshness and quality."
  },
  {
    title: "Modern Refrigerated Fleet",
    description: "Our vehicles are equipped with advanced refrigeration units and GPS monitoring for maximum reliability."
  },
  {
    title: "Compliance & Safety Standards",
    description: "We adhere to strict hygiene and industry regulations, guaranteeing safe handling of food, pharmaceuticals, and sensitive goods."
  },
  {
    title: "Flexible & Affordable Solutions",
    description: "From small deliveries to large-scale refrigerated transport, we provide tailored solutions to meet every business need."
  }
];

const faqs = [
  {
    question: "What types of goods require refrigerated transport?",
    answer: "We handle perishable items such as food, beverages, dairy, pharmaceuticals, and other temperature-sensitive products."
  },
  {
    question: "How do you maintain temperature during transport?",
    answer: "Our refrigerated trucks use advanced cooling units with real-time monitoring to maintain consistent temperatures."
  },
  {
    question: "Do you offer multi-stop refrigerated deliveries?",
    answer: "Yes, we provide flexible delivery options including single and multi-stop runs across Sydney and surrounding regions."
  },
  {
    question: "Can I book refrigerated transport for urgent deliveries?",
    answer: "Yes, we offer priority and same-day refrigerated transport depending on availability."
  },
  {
    question: "What temperature ranges do your vehicles support?",
    answer: "Our fleet supports a wide range of temperatures, from chilled to deep-frozen, depending on cargo requirements."
  },
  {
    question: "Do you service both local and regional areas?",
    answer: "Yes, we provide refrigerated transport across Sydney as well as to regional NSW locations."
  },
  {
    question: "Are your drivers trained in handling perishable goods?",
    answer: "Absolutely. Our drivers are trained in cold chain handling, safety, and compliance standards."
  },
  {
    question: "Do you provide regular scheduled refrigerated deliveries?",
    answer: "Yes, we offer both one-time and recurring delivery services to suit your business needs."
  },
  {
    question: "How can I track my refrigerated shipment?",
    answer: "We provide real-time GPS tracking along with temperature monitoring for full transparency."
  },
  {
    question: "How do I request a refrigerated transport quote?",
    answer: "Simply share your cargo type, pickup/delivery details, and temperature requirements — our team will provide a tailored quote."
  }
];

export default function HomePage() {
  return (
    <>
        <BannerHeroInnerPage
            H1="Sydney’s Trusted Refrigerated Transport Services"
            H2Span="End-to-End Refrigerated Transport"
            H2="Solutions with Guaranteed Temperature Control."
            Content="Our modern refrigerated fleet and expert cold chain management ensure your goods stay fresh, safe, and compliant from pickup to delivery — every time."
        />
        <TopContent
            title="Services in Sydney"
            titlespan="Refrigerated Transport"
            subtitle="Professional, Reliable, and On-Time – Every Time"
            photo="/images/refrigerated-transport-sydney/refresgerted.png"
            topparagraph="When it comes to transporting perishable goods, temperature control and reliability are critical. Our Refrigerated Transport Services in Sydney are designed to ensure your products remain fresh, safe, and compliant from pickup to delivery. Whether it’s food, beverages, pharmaceuticals, or sensitive materials, we provide end-to-end cold chain solutions backed by modern refrigerated vehicles and expert handling."
            topcontent={`<p>We understand that delays or temperature fluctuations can be costly. That’s why we use GPS-enabled vehicles with temperature monitoring, ensuring your goods are transported under optimal conditions at all times. With a strong focus on hygiene, compliance, and punctuality, we deliver peace of mind with every refrigerated shipment.</p>
            <p>Whether you’re a business requiring daily refrigerated deliveries or a one-off transport solution, our team ensures reliable, efficient, and affordable cold chain logistics tailored to your needs.</p>`}
        />
        <WhyChoose
          title="OUR REFRIGERATED TRANSPORT SERVICES IN SYDNEY"
          titlecontent="Choosing the right partner for refrigerated freight ensures your perishable goods reach their destination in perfect condition. Here’s why businesses trust us:"
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
