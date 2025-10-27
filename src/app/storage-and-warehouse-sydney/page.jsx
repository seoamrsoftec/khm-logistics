

import BannerHeroInnerPage from "@/components/InnerPages/BannerHeroInnerPage";
import FAQSection from "@/components/InnerPages/FAQSection";
import TopContent from "@/components/InnerPages/TopContent";
import WhyChoose from "@/components/InnerPages/WhyChoose";
import FinalCTA from "@/components/sections/FinalCTA";
import TestimonialSlider from "@/components/sections/TestimonialSlider";
export async function generateMetadata() {
    const siteUrl = 'https://www.sydneycontainer.com.au';
    const title = 'Storage & Warehouse Services Sydney | Secure & Flexible Solutions';
    const description = 'Need reliable storage and warehouse services in Sydney? We offer secure, flexible, and cost‑effective solutions for containers, cargo, and freight with 24/7 monitoring.';
    return {
        title, description,
        alternates: {
          canonical: `${siteUrl}/storage-and-warehouse-sydney`,
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
      title: "Secure & Modern Facilities",
      description: "Our warehouses are equipped with advanced security systems, 24/7 monitoring, and controlled access to protect your goods."
    },
    {
      title: "Flexible Storage Solutions",
      description: "From short-term holding to long-term warehousing, we provide flexible storage options tailored to your requirements."
    },
    {
      title: "Strategic Locations",
      description: "Located near major ports and transport routes, our facilities make distribution and logistics faster and more efficient."
    },
    {
      title: "Inventory Management & Distribution",
      description: "We offer stock management, order processing, and distribution services to keep your supply chain seamless."
    }
  ];

const faqs = [
  {
    question: "What types of goods can you store?",
    answer: "We store palletized goods, bulk shipments, oversized cargo, and general freight across multiple industries."
  },
  {
    question: "Do you provide both short-term and long-term storage?",
    answer: "Yes, we offer flexible storage solutions ranging from a few days to several months or longer."
  },
  {
    question: "Is your warehouse secure?",
    answer: "Absolutely. Our facilities are equipped with CCTV surveillance, alarm systems, and controlled access 24/7."
  },
  {
    question: "Do you provide inventory management services?",
    answer: "Yes, we offer stock control, order processing, and distribution services for businesses."
  },
  {
    question: "Can you handle oversized or out-of-gauge cargo?",
    answer: "Yes, our warehouses are equipped to handle oversized loads and specialized cargo requirements."
  },
  {
    question: "Do you offer bonded storage?",
    answer: "Yes, we can arrange bonded warehousing for import and export cargo subject to customs clearance."
  },
  {
    question: "How close are your warehouses to Sydney ports?",
    answer: "Our facilities are strategically located near Sydney’s major ports and transport hubs for seamless logistics."
  },
  {
    question: "Can you arrange transport from the warehouse to delivery points?",
    answer: "Yes, we provide complete end-to-end logistics, including transport, storage, and final delivery."
  },
  {
    question: "Do you offer climate-controlled storage?",
    answer: "Yes, we provide climate-controlled options for goods requiring special care."
  },
  {
    question: "How can I get a warehouse storage quote?",
    answer: "Simply provide us with the type of cargo, quantity, and duration of storage needed — our team will create a tailored solution."
  }
];

export default function HomePage() {
  return (
    <>
     <BannerHeroInnerPage
            H1="Storage & Warehouse Services in Sydney"
            H2Span="Flexible Storage & Warehousing"
            H2="Solutions Across Sydney."
            Content="Whether you need temporary storage or a long-term warehousing partner, our facilities are equipped with 24/7 monitoring, advanced security, and expert handling to keep your goods safe at all times."
        />
        <TopContent
            title="Services in Sydney"
            titlespan="Storage & Warehouse "
            subtitle="Professional, Reliable, and On-Time – Every Time"
            photo="/images/storage-and-warehouse/storage-and-warehouse-one.png"
            topparagraph="Managing your goods safely and efficiently is just as important as transporting them. Our Storage & Warehouse Services in Sydney are designed to provide secure, flexible, and cost-effective solutions for businesses of all sizes. Whether you need short-term storage between shipments or long-term warehousing for bulk inventory, we have the facilities, equipment, and expertise to handle it all."
            topcontent={`<p>Our warehouses are strategically located near major ports and transport hubs, making it easy to streamline import and export logistics. With modern security systems, inventory management solutions, and professional handling, we provide peace of mind that your goods are safe, organized, and always ready for dispatch.</p>
           <p>From palletized goods to oversized cargo, we offer tailored storage and distribution services that keep your supply chain running smoothly. Whether you’re a small business or a large enterprise, our warehousing solutions are designed to fit your needs.</p>`}
        />

        <WhyChoose
        title="OUR STORAGE & WAREHOUSE SERVICES IN SYDNEY"
        titlecontent="Choosing the right storage partner ensures your goods are safe, accessible, and efficiently managed. Here’s why businesses trust us:"
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
