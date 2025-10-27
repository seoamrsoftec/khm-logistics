

import BannerHeroInnerPage from "@/components/InnerPages/BannerHeroInnerPage";
import FAQSection from "@/components/InnerPages/FAQSection";
import TopContent from "@/components/InnerPages/TopContent";
import WhyChoose from "@/components/InnerPages/WhyChoose";
import FinalCTA from "@/components/sections/FinalCTA";
import TestimonialSlider from "@/components/sections/TestimonialSlider";
export async function generateMetadata() {
    const siteUrl = 'https://www.sydneycontainer.com.au';
    const title = 'Linehaul Transport Sydney';
    const description = 'Linehaul Transport.';
    return {
        title, description,
        alternates: {
          canonical: `${siteUrl}/linehaul-transport-sydney`,
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
    title: "Nationwide Coverage & Connections",
    description: "We connect Sydney with major cities and regional hubs, ensuring smooth and timely long-distance freight transport."
  },
  {
    title: "Modern Fleet & Skilled Drivers",
    description: "Our heavy-duty trucks, trailers, and professional drivers ensure safe and efficient transport for all types of freight."
  },
  {
    title: "On-Time & Cost-Effective Solutions",
    description: "With optimized scheduling and route planning, we deliver linehaul services that are both punctual and affordable."
  },
  {
    title: "24/7 Tracking & Customer Support",
    description: "Stay informed with real-time GPS tracking and around-the-clock support for complete transparency."
  },
];
const faqs = [
  {
    question: "What is linehaul transport?",
    answer: "Linehaul refers to the long-distance movement of freight between cities, ports, and distribution hubs, usually over highways and interstate routes."
  },
  {
    question: "Do you provide interstate linehaul from Sydney?",
    answer: "Yes, we connect Sydney with major cities and regional areas across Australia for efficient interstate freight transport."
  },
  {
    question: "Can you handle both full truckloads (FTL) and part loads?",
    answer: "Yes, we offer flexible options for full truckloads as well as palletized freight depending on your needs."
  },
  {
    question: "Do you provide overnight or express linehaul services?",
    answer: "Yes, we can arrange priority and overnight linehaul services for time-sensitive cargo."
  },
  {
    question: "What types of freight can you move via linehaul?",
    answer: "We handle general freight, palletized goods, retail stock, industrial cargo, and more — safely and efficiently."
  },
  {
    question: "How do you ensure on-time deliveries?",
    answer: "We use optimized route planning, real-time tracking, and experienced drivers to guarantee timely arrivals."
  },
  {
    question: "Is my freight insured during linehaul transport?",
    answer: "Yes, all cargo is fully insured, and additional coverage options are available upon request."
  },
  {
    question: "Do you provide linehaul for import/export containers?",
    answer: "Yes, we provide linehaul transport from Sydney ports to warehouses, distribution centers, and regional locations."
  },
  {
    question: "Can I schedule regular linehaul runs with your company?",
    answer: "Absolutely. We provide flexible scheduling for recurring transport requirements to keep your supply chain consistent."
  },
  {
    question: "How can I get a quote for linehaul services?",
    answer: "Simply share your cargo details, pickup/delivery locations, and timeframe, and our team will provide a tailored quote."
  },
];
export default function HomePage() {
  return (
    <>
      <BannerHeroInnerPage
            H1="Linehaul Transport Services in Sydney"
            H2Span="Linehaul Transport"
            H2="Services Across Sydney and WorldWide"
            Content="We provide fast, secure, and affordable container freight solutions tailored to your needs. Trust our expert team to deliver your cargo safely and on time."
        />
        <TopContent
            title="Services in Sydney"
            titlespan="Linehaul Transport"
            subtitle="Professional, Reliable, and On-Time – Every Time"
            photo="/images/linehaul-transport-sydney/linehaul.jpg"
            topparagraph="Linehaul transport plays a critical role in ensuring the efficient movement of goods between cities, ports, and distribution hubs. Our Linehaul Transport Services in Sydney are designed to provide fast, reliable, and cost-effective long-distance freight solutions for businesses of all sizes. Whether it’s full truckloads, palletized freight, or time-sensitive cargo, our modern fleet and experienced drivers ensure every delivery arrives on time, every time."
            topcontent={`
            <p>We specialize in connecting Sydney to key regional and interstate destinations, handling everything from port-to-warehouse transfers to overnight linehaul solutions. With strict adherence to safety standards, GPS tracking, and proactive communication, we take the stress out of long-distance freight. Our focus is on maximizing efficiency while minimizing costs, ensuring our clients enjoy dependable transport with complete peace of mind.</p>
              
           <p>Whether you require one-off transport or ongoing scheduled runs, our flexible linehaul solutions are tailored to your business needs. With us, you get more than just transport — you get a trusted logistics partner dedicated to keeping your supply chain moving.</p>`}
        />
        <WhyChoose
          title="OUR LINEHAUL TRANSPORT SERVICES IN SYDNEY"
          titlecontent="Choosing the right linehaul partner ensures your goods move seamlessly across the supply chain. Our services are built on reliability, efficiency, and customer satisfaction. Here’s why businesses trust us for linehaul in Sydney:"
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
