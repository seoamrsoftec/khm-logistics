import BannerHeroInnerPage from "@/components/InnerPages/BannerHeroInnerPage";
import FAQSection from "@/components/InnerPages/FAQSection";
import TopContent from "@/components/InnerPages/TopContent";
import WhyChoose from "@/components/InnerPages/WhyChoose";
import FinalCTA from "@/components/sections/FinalCTA";
import TestimonialSlider from "@/components/sections/TestimonialSlider";
export async function generateMetadata() {
    const siteUrl = 'https://www.sydneycontainer.com.au';
    const title = 'Sideloader Container Transport Service | Safe & Cost-Effective Delivery';
    const description = 'Choose our professional sideloader service for safe, flexible, and cost-effective container transport. Direct ground delivery, time-saving unloading, and reliable handling for warehouses, construction sites, events, and more.';
      return {
          title, description,
          alternates: {
            canonical: `${siteUrl}/sideloader-service-sydney`,
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
      title: "Direct Ground Delivery",
      description: "Sideloaders allow containers to be placed at ground level, making access and unloading easy and convenient."
    },
    {
      title: "Cost-Effective & Time-Saving",
      description: "No need for cranes or additional equipment — sideloaders handle the full loading and unloading process efficiently."
    },
    {
      title: "Safe & Reliable Handling",
      description: "We follow strict safety protocols to ensure your containers are transported and positioned without risk of damage."
    },
    {
      title: "Flexible Solutions",
      description: "Perfect for warehouses, construction sites, events, and businesses with limited infrastructure."
    }
  ];

  const faqs = [
    {
      question: "What is a sideloader truck?",
      answer: "A sideloader is a specialized truck with hydraulic cranes on the sides that can lift and place containers at ground level."
    },
    {
      question: "What size containers can a sideloader handle?",
      answer: "Our sideloaders are suitable for both 20ft and 40ft shipping containers."
    },
    {
      question: "Do I need extra equipment at my site?",
      answer: "No — sideloaders remove the need for cranes or forklifts, making it the most efficient solution."
    },
    {
      question: "Where can sideloaders deliver containers?",
      answer: "They can deliver to homes, warehouses, construction sites, industrial yards, and rural areas."
    },
    {
      question: "Is the service available for both import and export containers?",
      answer: "Yes, sideloaders are used for both pickup and delivery of import/export containers."
    },
    {
      question: "Can a sideloader place a container onto another truck or trailer?",
      answer: "Yes, sideloaders can transfer containers between vehicles."
    },
    {
      question: "Are sideloaders suitable for tight spaces?",
      answer: "Yes, they are designed for sites with limited access where cranes are impractical."
    },
    {
      question: "Do you provide same-day sideloader services?",
      answer: "Yes, subject to availability and scheduling, we offer fast turnaround."
    },
    {
      question: "Is there a weight limit for sideloader lifting?",
      answer: "Yes, generally up to 20–25 tons depending on the equipment and container type."
    },
    {
      question: "How do I book a sideloader service?",
      answer: "Simply contact our team with your container size, pickup, and delivery details, and we’ll arrange everything."
    }
  ];
export default function HomePage() {
  return (
    <>
     <BannerHeroInnerPage
            H1="Sideloader Container Transport Service in Sydney"
            H2Span="Reliable & Efficient"
            H2="Sideloader Container Transport"
            Content="When it comes to container delivery in Sydney, sideloader transport is one of the most efficient and convenient solutions. Our sideloader trucks are designed to lift and place containers directly onto the ground at your premises, eliminating the need for cranes, forklifts, or loading docks. Whether you’re receiving imported goods or preparing exports, our sideloader service ensures smooth, safe, and cost-effective container handling."
        />
        <TopContent
            title="Services in Sydney"
            titlespan="Book Our Sideloader"
            subtitle=""
            photo="/images/side-loder/sideloder-service-page.jpeg"
            topparagraph="When it comes to moving shipping containers, efficiency and precision matter. Our Sideloader Services are the ideal solution for safe, quick, and hassle-free container transport. A sideloader truck is designed to lift, load, and unload containers directly onto the ground, eliminating the need for additional cranes or forklifts."
            topcontent={`<p>This service is particularly beneficial for businesses and individuals who require containers delivered to locations without loading docks or heavy equipment. Whether it’s for import, export, or onsite storage, our sideloaders ensure seamless handling of 20ft and 40ft containers.</p>
            <p>By choosing our sideloader service, you save time, reduce costs, and gain the flexibility of ground-level container delivery — all while ensuring maximum safety.</p>`}
        />
        <WhyChoose
             title="WHY CHOOSE OUR SIDELOADER SERVICE IN SYDNEY"
             titlecontent="Our sideloader container transport service is designed to make container delivery, loading, and unloading smooth, efficient, and cost-effective. Whether you need containers placed directly on the ground or moved between sites, our fleet and skilled operators ensure a safe and hassle-free experience."
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
