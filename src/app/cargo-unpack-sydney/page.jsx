import BannerHeroInnerPage from "@/components/InnerPages/BannerHeroInnerPage";
import FAQSection from "@/components/InnerPages/FAQSection";
import TopContent from "@/components/InnerPages/TopContent";
import WhyChoose from "@/components/InnerPages/WhyChoose";
import FinalCTA from "@/components/sections/FinalCTA";
import TestimonialSlider from "@/components/sections/TestimonialSlider";
export async function generateMetadata() {
    const siteUrl = 'https://www.sydneycontainer.com.au';
    const title = 'Cargo Unpack Services Sydney | Professional & Efficient Unpacking';
    const description = 'Looking for cargo unpack services in Sydney? Our team provides fast, safe, and efficient unpacking of containers and cargo, ensuring accuracy and on‑time delivery.';
      return {
          title, description,
          alternates: {
            canonical: `${siteUrl}/cargo-unpack-sydney`,
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
          title: "Professional Handling Team",
          description: "Our skilled operators and staff ensure safe, accurate, and damage-free unpacking for all cargo types."
        },
        {
          title: "Specialized Equipment",
          description: "With forklifts, cranes, and heavy-duty gear, we handle palletized, bulk, and oversized cargo with ease."
        },
        {
          title: "Strategic Sydney Locations",
          description: "Our unpacking facilities are near major ports, ensuring faster turnaround times and reduced costs."
        },
        {
          title: "Flexible & Reliable Solutions",
          description: "From one-off container unpacks to regular services, we provide tailored solutions that fit your operations."
        }
    ];

    const faqs = [
      {
        question: "What is cargo unpacking?",
        answer: "Cargo unpacking refers to unloading goods from shipping containers and preparing them for distribution, storage, or delivery."
      },
      {
        question: "Do you unpack both palletized and loose cargo?",
        answer: "Yes, we handle palletized, bulk, loose, and oversized cargo."
      },
      {
        question: "Can you provide storage after unpacking?",
        answer: "Yes, we offer both short-term and long-term storage options once your cargo is unpacked."
      },
      {
        question: "Do you handle fragile or sensitive cargo?",
        answer: "Absolutely. Our team is trained to handle delicate goods with extra care to avoid damage."
      },
      {
        question: "How fast can you unpack a container?",
        answer: "Turnaround times vary depending on cargo type, but we pride ourselves on efficiency and speed."
      },
      {
        question: "Do you provide customs clearance support?",
        answer: "Yes, we can assist with customs clearance and documentation for imported cargo."
      },
      {
        question: "Can you unpack at the client’s site?",
        answer: "Yes, depending on requirements, we can arrange on-site unpacking with the right equipment."
      },
      {
        question: "Do you provide sorting and palletizing after unpacking?",
        answer: "Yes, we offer full unpacking services including sorting, palletizing, and inventory checks."
      },
      {
        question: "Is your unpacking service available for oversized or heavy cargo?",
        answer: "Yes, our equipment and facilities are designed to handle oversized, OOG, and heavy shipments."
      },
      {
        question: "How do I get a quote for cargo unpack services?",
        answer: "Simply provide details about your container type, cargo nature, and location — our team will prepare a tailored quote."
      }
    ];

export default function HomePage() {
  return (
    <>
        
        <BannerHeroInnerPage
            H1="Cargo Unpack Services in Sydney"
            H2Span="Professional Cargo Unpack"
            H2="Services in Sydney for Containers & Freight."
            Content="From palletized goods to oversized freight, our skilled team and modern equipment provide reliable, damage-free unpacking solutions — helping your cargo move quickly and securely from container to destination."
        />
        <TopContent
            title="Services in Sydney"
            titlespan="Cargo Unpack"
            subtitle="Cargo.Unpack.Sydney"
            photo="/images/cargo-unpack/cargo-unpack-one.jpg"
            topparagraph="When your containers arrive, efficient and careful unpacking is essential to keep your supply chain moving. Our Cargo Unpack Services in Sydney are designed to provide fast, safe, and professional unloading of all types of cargo. Whether it’s palletized freight, bulk shipments, or oversized goods, our team ensures your containers are unpacked with precision and care, minimizing delays and reducing risks of damage."
            topcontent={`<p>We handle the entire process — from container unpacking and sorting to palletizing and storage. With access to forklifts, cranes, and specialized handling equipment, we manage all cargo types efficiently. Our facilities are conveniently located near Sydney ports, making the process smooth, cost-effective, and time-saving for importers, exporters, and logistics providers.</p>
            <p>Whether you require a one-off container unpack or ongoing unpacking services, we tailor solutions to meet your business needs with reliability and professionalism.</p>`}
        />
        <WhyChoose
             title="OUR CARGO UNPACK SERVICES IN SYDNEY"
             titlecontent="Unpacking containers requires precision and expertise. Here’s why businesses choose us:"
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
