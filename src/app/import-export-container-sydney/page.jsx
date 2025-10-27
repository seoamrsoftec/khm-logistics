

import BannerHeroInnerPage from "@/components/InnerPages/BannerHeroInnerPage";
import FAQSection from "@/components/InnerPages/FAQSection";
import TopContent from "@/components/InnerPages/TopContent";
import WhyChoose from "@/components/InnerPages/WhyChoose";
import FinalCTA from "@/components/sections/FinalCTA";
import TestimonialSlider from "@/components/sections/TestimonialSlider";
export async function generateMetadata() {
    const siteUrl = 'https://www.sydneycontainer.com.au';
    const title = 'Import & Export Container Services Sydney | Reliable Container Shipping';
    const description = 'Looking for trusted import and export container services in Sydney? We offer secure, on-time container transport, expert handling, and competitive rates for all your shipping needs.';
    return {
        title, description,
        alternates: {
          canonical: `${siteUrl}/import-export-container-sydney`,
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
    title: "On-Time & Secure Deliveries",
    description: "Every shipment is delivered exactly when promised, with no excuses and no delays."
  },
  {
    title: "Expertise in Import & Export Logistics",
    description: "Our team understands Sydney’s port operations, customs requirements, and international freight handling."
  },
  {
    title: "Specialised Transport Options",
    description: "From side loader container delivery to normal trailer transport, we provide the right solution for your cargo type and location."
  },
  {
    title: "Modern Fleet & Advanced Equipment",
    description: "Equipped with the latest vehicles, lifting technology, and safety systems for hassle-free transport."
  },
  {
    title: "Real-Time Tracking & 24/7 Support",
    description: "Stay updated throughout the journey with constant communication and dedicated support."
  }
];

const faqs = [
  {
    question: "Do you offer side loader container transport in Sydney?",
    answer: "Yes, we provide side loader services for easy ground-level delivery, making unloading simple and efficient."
  },
  {
    question: "What is the difference between a side loader and a normal trailer?",
    answer: "Side loaders are perfect for direct on-site unloading, while normal trailers are designed for long-distance and bulk container transport."
  },
  {
    question: "Can you handle both import and export containers?",
    answer: "Yes, we manage both import and export container movements, including port-to-warehouse transfers and nationwide delivery."
  },
  {
    question: "Do you provide tracking and updates?",
    answer: "Absolutely. We offer real-time container tracking and 24/7 support so you always know where your cargo is."
  },
  {
    question: "How do I book a side loader or trailer transport service?",
    answer: "Simply request a quote online or call our team at 1800 560 560 to book the right transport option for your needs."
  },
  {
    question: "What areas do you service beyond Sydney?",
    answer: "Along with Sydney, we provide import and export container transport across New South Wales and nationwide, ensuring your cargo reaches any destination."
  },
  {
    question: "Do you assist with port and customs clearance?",
    answer: "Yes, our team has expertise in Sydney’s port operations and customs requirements, helping you streamline import and export container logistics without delays."
  },
  {
    question: "What container sizes can you transport?",
    answer: "We handle all major container sizes including 20ft, 40ft, and high cube containers, tailored to your cargo requirements."
  },
  {
    question: "Is your fleet equipped with modern safety systems?",
    answer: "Yes, our trucks and equipment are regularly upgraded and fitted with the latest lifting technology and safety systems for secure and efficient transport."
  },
  {
    question: "Can I schedule urgent or last-minute container deliveries?",
    answer: "Yes, we offer flexible scheduling, including urgent and same-day container deliveries in Sydney, subject to availability."
  }
];
export default function HomePage() {
  return (
    <>
        
        <BannerHeroInnerPage
            H1="Import Export Container Sydney"
            H2Span="Seamless"
            H2="Import & Export Container Solutions Across Sydney and Beyond"
            Content="We provide end-to-end import and export container transport solutions in Sydney, ensuring your cargo moves safely, securely, and on time. With years of industry expertise, our team delivers cost-effective and compliant logistics tailored to your needs — whether for local delivery or international shipping."
        />
          <TopContent
              title="Services in Sydney"
              titlespan="Import & Export Container"
              subtitle="Professional, Reliable, and On-Time – Every Time"
              photo="/images/import-export-container-sydney/import-and-export-one.jpg"
              topparagraph="When it comes to import and export container transport, efficiency, safety, and compliance are key. We specialise in moving all types of containers — standard, oversized, refrigerated, or hazardous goods — to and from Sydney’s ports. Backed by a modern fleet and a dedicated team, we ensure every shipment is handled with precision from pick-up to final delivery."
              topcontent={`<h3>Our services include:</h3>
                <p><b>Side Loader Container Transport –</b>Ideal for safe and efficient delivery where containers need to be placed directly on the ground at your site. Our side loader trucks provide quick, flexible unloading, making them perfect for warehouses, construction sites, and businesses with limited loading facilities.</p>
                <p><b>Normal Trailer Container Transport –</b>Best suited for long-distance and bulk transport. Our normal trailers are built to handle both import and export containers with stability and security, ensuring cost-effective and reliable transport across Sydney and beyond.</p>
                <p>With our deep understanding of port regulations, customs requirements, and road logistics, we make container movement seamless and stress-free. Whether you’re an importer, exporter, or freight forwarder, we deliver containers on schedule, securely, and with full transparency.</p>`}
         />
        <WhyChoose
          subtitle="Your Trusted Import & Export Container Partner in Sydney"
          titlecontent="At Import Export Container Sydney, we don’t just transport containers — we deliver trust, reliability, and peace of mind. Here’s what makes us stand out:"
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
