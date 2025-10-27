

import BannerHeroInnerPage from "@/components/InnerPages/BannerHeroInnerPage";
import FAQSection from "@/components/InnerPages/FAQSection";
import TopContent from "@/components/InnerPages/TopContent";
import WhyChoose from "@/components/InnerPages/WhyChoose";
import FinalCTA from "@/components/sections/FinalCTA";
import TestimonialSlider from "@/components/sections/TestimonialSlider";
export async function generateMetadata() {
    const siteUrl = 'https://www.sydneycontainer.com.au';
    const title = 'Professional Shipping Container Transport Companies Sydney';
    const description = 'Cargo Logistics is a top professional shipping container transport company in Sydney. From 20ft container transport to side loader transport, contact us.';
    return {
        title, description,
        alternates: {
          canonical: `${siteUrl}/transport-container-sydney`,
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
    title: "On-Time & Dependable Deliveries",
    description:"Timely delivery is our promise. We ensure your containers arrive exactly when expected — no excuses, no delays."
  },
  {
    title: "Local Experts You Can Rely On",
    description:"Our Sydney-based team brings deep knowledge of local ports, routes, and compliance requirements to every job — ensuring seamless operations from start to finish."
  },
  {
    title: "Advanced Fleet & Handling Equipment",
    description:"From standard loads to oversized cargo, our fleet is equipped with the latest vehicles and lifting technology for safe and efficient transport."
  },
  {
    title: "Real-Time Updates & 24/7 Support",
    description:"Communication is key. We keep you informed throughout the journey with real-time tracking and always-available support for complete transparency."
  },
];

const faqs = [
  {
    question: "What types of containers can you transport?",
    answer: "We handle standard, high cube, flat rack, open-top, refrigerated, and oversized containers."
  },
  {
    question: "Do you offer same-day container delivery in Sydney?",
    answer: "Yes, depending on availability and schedule, we offer same-day deliveries for urgent container moves."
  },
  {
    question: "Can you handle both import and export containers?",
    answer: "Absolutely. We manage all logistics related to both import and export container transport."
  },
  {
    question: "Are your services limited to Sydney?",
    answer: "While we specialize in Sydney, we also offer container transport to and from nearby regions in NSW."
  },
  {
    question: "How do I get a quote for container transport?",
    answer: "Fill out our quick quote form online or call us directly. We'll respond with a no-obligation quote ASAP."
  },
  {
    question: "Is container tracking available?",
    answer: "Yes, we offer real-time updates and tracking so you always know the status of your cargo."
  },
  {
    question: "What kind of equipment do you use?",
    answer: "We operate a fleet of modern trucks with side loaders, tilt trays, and cranes for efficient loading and unloading."
  },
  {
    question: "Do you provide short-term or long-term storage?",
    answer: "Yes, we can assist with both short and long-term storage solutions upon request."
  },
  {
    question: "How do you ensure cargo safety?",
    answer: "Our drivers are professionally trained, and we use the latest equipment to ensure your cargo is secure and handled correctly."
  },
  {
    question: "What makes your service different from other container transporters?",
    answer: "Our local expertise, 24/7 communication, dependable scheduling, and tailored service make us stand out."
  }
];

export default function HomePage() {
  return (
    <>
        
        <BannerHeroInnerPage
            H1="Transport Container Services in Sydney"
            H2Span="Fast, Safe"
            H2="& Efficient Container Transport Solutions"
            Content="We provide fast, secure, and affordable container freight solutions tailored to your needs. Trust our expert team to deliver your cargo safely and on time."
        />
        <TopContent
            title="Services in Sydney"
            titlespan="Transport Container"
            subtitle="Professional, Reliable, and On-Time – Every Time"
            photo="/images/transport-container-sydney/Sydny contaner.png"
            topparagraph="When it comes to container transport in Sydney, precision, speed, and safety matter. At Sydney Container Forwarders, we specialize in providing seamless transport solutions for all types of containers — whether standard, oversized, import, or export. With a deep understanding of local port regulations, road logistics, and efficient scheduling, we ensure your container gets to where it needs to go, on time and intact."
            topcontent={`<p>From short-haul deliveries across the city to full-scale logistics support from port to warehouse, our experienced team manages every detail. Backed by modern vehicles, trained drivers, and 24/7 communication, we make container transport simple, transparent, and dependable. No delays, no surprises — just logistics done right.</p><p>Whether you are a business managing high-volume freight or an individual requiring one-time container movement, we tailor our services to your needs. Our commitment to efficiency and customer satisfaction means we go above and beyond to deliver every container safely, affordably, and exactly when promised.</p>`}
        />
        <WhyChoose
          titlecontent="At Sydney Container Forwarders, we go beyond just moving freight — we deliver peace of mind. Backed by years of local expertise and a commitment to service excellence, we’ve become the trusted name for reliable container transport across Sydney. Here’s what sets us apart:"
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
