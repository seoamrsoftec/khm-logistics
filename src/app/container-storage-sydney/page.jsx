import BannerHeroInnerPage from "@/components/InnerPages/BannerHeroInnerPage";
import FAQSection from "@/components/InnerPages/FAQSection";
import TopContent from "@/components/InnerPages/TopContent";
import WhyChoose from "@/components/InnerPages/WhyChoose";
import FinalCTA from "@/components/sections/FinalCTA";
import TestimonialSlider from "@/components/sections/TestimonialSlider";
export async function generateMetadata() {
    const siteUrl = 'https://www.sydneycontainer.com.au';
    const title = 'Container Storage Services Sydney | Secure & Flexible Yard Solutions';
    const description = 'Looking for safe container storage in Sydney? We provide secure short‑term and long‑term container storage with 24/7 monitoring, easy access, and cost‑effective solutions.';
    return {
        title, description,
        alternates: {
          canonical: `${siteUrl}/container-storage-sydney`,
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
    title: "Secure & Well-Maintained Yards",
    description: "Our storage facilities are equipped with advanced security systems, regular monitoring, and safe container handling."
  },
  {
    title: "Flexible Storage Options",
    description: "We provide both short-term and long-term storage solutions, ideal for importers, exporters, and logistics providers."
  },
  {
    title: "Prime Sydney Locations",
    description: "Our yards are strategically positioned near major ports, making container pickup and delivery faster and more efficient."
  },
  {
    title: "Specialized Handling Equipment",
    description: "With cranes, forklifts, and heavy-duty container movers, we ensure safe and professional handling of all container types."
  }
];

const faqs = [
  {
    question: "What types of containers can you store?",
    answer: "We store 20ft, 40ft, high cube, refrigerated, and specialized containers safely in our facilities."
  },
  {
    question: "Do you provide both short-term and long-term container storage?",
    answer: "Yes, we offer flexible storage solutions for both temporary and extended needs."
  },
  {
    question: "Is your container yard secure?",
    answer: "Absolutely. Our facilities feature CCTV surveillance, access control, and 24/7 monitoring."
  },
  {
    question: "Can you handle loaded (full) containers as well as empty ones?",
    answer: "Yes, we store both empty and full containers, ensuring they remain safe and properly managed."
  },
  {
    question: "Do you offer container lifting and handling services?",
    answer: "Yes, we use specialized equipment such as forklifts and cranes to handle containers of all sizes."
  },
  {
    question: "How close are your facilities to Sydney ports?",
    answer: "Our container storage yards are located close to major Sydney ports, ensuring quick and efficient logistics."
  },
  {
    question: "Can you arrange container transport to and from the yard?",
    answer: "Yes, we provide integrated services including pickup, storage, and delivery."
  },
  {
    question: "Do you provide storage for oversized or out-of-gauge cargo in containers?",
    answer: "Yes, we can accommodate oversized containers and provide tailored handling solutions."
  },
  {
    question: "Are your facilities insured?",
    answer: "Yes, all stored containers are covered under our facility’s insurance, with additional options available."
  },
  {
    question: "How can I get a container storage quote?",
    answer: "Simply provide the type of container, storage duration, and any special requirements, and we’ll prepare a tailored quote."
  }
];

export default function HomePage() {
  return (
    <>
       <BannerHeroInnerPage
            H1="Container Storage Services in Sydney"
            H2Span="Professional"
            H2="Container Storage Solutions in Sydney."
            Content="From short-term to long-term container storage, we deliver secure facilities, flexible options, and reliable handling for importers, exporters, and businesses across Sydney."
        />
        <TopContent
            title="Services in Sydney"
            titlespan="Container Storage"
            subtitle="Professional, Reliable, and On-Time – Every Time"
            photo="/images/container-storage/container-storage.png"
            topparagraph="Managing containers efficiently is crucial for smooth logistics and cost control. Our Container Storage Services in Sydney are designed to provide businesses and individuals with safe, flexible, and reliable storage solutions for both short-term and long-term needs. Whether you’re holding empty containers, full containers awaiting delivery, or oversized cargo, we have the facilities, space, and expertise to keep your operations running seamlessly."
            topcontent={`<p>With secure yards located near Sydney’s major ports and transport hubs, we make container storage simple and convenient. Our facilities are equipped with heavy-lift equipment, 24/7 monitoring, and easy access for trucks, ensuring smooth handling and safe storage of every unit. From import/export containers to specialized storage needs, our team ensures your cargo remains safe, organized, and ready for dispatch whenever required.</p>`}
        />
      <WhyChoose
        title="OUR CONTAINER STORAGE SERVICES IN SYDNEY"
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
