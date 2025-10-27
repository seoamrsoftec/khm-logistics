

import BannerHeroInnerPage from "@/components/InnerPages/BannerHeroInnerPage";
import FAQSection from "@/components/InnerPages/FAQSection";
import TopContent from "@/components/InnerPages/TopContent";
import WhyChoose from "@/components/InnerPages/WhyChoose";
import FinalCTA from "@/components/sections/FinalCTA";
import TestimonialSlider from "@/components/sections/TestimonialSlider";
export async function generateMetadata() {
    const siteUrl = 'https://www.sydneycontainer.com.au';
    const title = 'LCL - Less than Container Load Sydney';
    const description = 'LCL - Less than Container Load.';
    return {
        title, description,
        alternates: {
          canonical: `${siteUrl}/lcl-sydney`,
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
    title: "Cost-Effective Cargo Transport",
    description: "Save money by only paying for the space your cargo occupies inside the container — ideal for smaller shipments."
  },
  {
    title: "Safe & Secure Consolidation",
    description: "We handle your cargo with care, ensuring it’s properly packed, consolidated, and protected during transit."
  },
  {
    title: "Reliable Global Connections",
    description: "With strong shipping line networks, we provide efficient LCL transport for both imports and exports worldwide."
  },
  {
    title: "24/7 Tracking & Support",
    description: "Stay informed with real-time updates and round-the-clock support for complete transparency."
  },
];
const faqs = [
  {
    question: "What is LCL shipping?",
    answer: "LCL (Less than Container Load) shipping allows multiple shippers to share space in a single container, reducing costs for smaller shipments."
  },
  {
    question: "When should I choose LCL instead of FCL?",
    answer: "Choose LCL if your cargo is not enough to fill a full container. It’s a cost-effective solution for small to medium shipments."
  },
  {
    question: "How do you ensure my cargo is safe in a shared container?",
    answer: "We carefully consolidate, pack, and secure goods to prevent damage during transit."
  },
  {
    question: "Do you handle both imports and exports under LCL?",
    answer: "Yes, we provide end-to-end LCL solutions for both imports into Sydney and exports worldwide."
  },
  {
    question: "Are there weight or size restrictions for LCL cargo?",
    answer: "Yes, while LCL is flexible, certain oversized or heavy items may require FCL or special handling. Our team will advise the best option."
  },
  {
    question: "How long does LCL shipping take compared to FCL?",
    answer: "LCL may take slightly longer due to consolidation and deconsolidation, but it’s an affordable solution for non-urgent cargo."
  },
  {
    question: "Can I track my LCL shipment?",
    answer: "Yes, we provide real-time tracking and updates for all LCL shipments."
  },
  {
    question: "Do you assist with customs clearance?",
    answer: "Absolutely. Our team handles all customs documentation and clearance for smooth cargo movement."
  },
  {
    question: "Is LCL shipping available for all destinations?",
    answer: "Yes, we provide LCL services to and from major global ports with reliable shipping partners."
  },
  {
    question: "How do I get a quote for LCL services?",
    answer: "Simply share the cargo details (dimensions, weight, origin, and destination), and we’ll provide a tailored LCL shipping quote."
  },
];
export default function HomePage() {
  return (
    <>
       <BannerHeroInnerPage
            H1="LCL Services in Sydney"
            H2Span="LCL"
            H2="Less than Container Load Services Across Sydney and WorldWide"
            Content="We provide fast, secure, and affordable container freight solutions tailored to your needs. Trust our expert team to deliver your cargo safely and on time."
        />

        <TopContent
            title="Services in Sydney"
            titlespan="LCL"
            subtitle="Professional, Reliable, and On-Time – Every Time"
            photo="/images/lcl/lcl-two.jpg"
            topparagraph="When it comes to Less than Container Load (LCL) services in Sydney, flexibility, cost-effectiveness, and reliability are key. We specialize in consolidating smaller shipments into shared containers, giving businesses and individuals an affordable way to transport cargo without the need to book a full container. Whether it’s imports or exports, our experienced team ensures your goods are packed securely, shipped efficiently, and delivered on time."
            topcontent={`<p>From careful consolidation at the port to seamless delivery at the destination, we manage every stage of the LCL process. With strong partnerships across shipping lines, advanced tracking, and a deep understanding of customs clearance, we make LCL shipping simple and stress-free. Our team focuses on maximizing space utilization while minimizing costs for our clients.</p>
            <p>Whether you’re a small business managing regular shipments or an individual needing a one-time cargo movement, our LCL services are tailored to suit your needs. Our commitment to affordability, efficiency, and customer satisfaction means you can trust us to handle your cargo with care and precision — every step of the way.</p>`}
        />

        <WhyChoose
          title="OUR LCL SERVICES IN SYDNEY"
          titlecontent="Choosing the right LCL partner can make all the difference when it comes to cost, efficiency, and peace of mind. Our team specializes in providing tailored Less than Container Load solutions that ensure your cargo is handled with care from start to finish. With a focus on affordability, safety, and global connectivity, we make LCL shipping simple, transparent, and dependable — so your goods reach their destination on time and intact."
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
