import BannerHeroInnerPage from "@/components/InnerPages/BannerHeroInnerPage";
import FAQSection from "@/components/InnerPages/FAQSection";
import TopContent from "@/components/InnerPages/TopContent";
import WhyChoose from "@/components/InnerPages/WhyChoose";
import FinalCTA from "@/components/sections/FinalCTA";
import TestimonialSlider from "@/components/sections/TestimonialSlider";
export async function generateMetadata() {
    const siteUrl = 'https://www.sydneycontainer.com.au';
    const title = 'Oversize/Out of Gauge Cargo Sydney';
    const description = 'Oversize/Out of Gauge Cargo';
    return {
        title, description,
        alternates: {
          canonical: `${siteUrl}/oversize-out-gauge-cargo-sydney`,
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
    title: "Specialized Oversize & OOG Handling",
    description: "We understand the complexities of moving non-standard freight. From machinery to construction materials, our team ensures every oversized load is handled with safety, care, and compliance."
  },
  {
    title: "Expert Knowledge of Permits & Regulations",
    description: "Transporting out of gauge cargo requires permits and route planning. Our Sydney-based specialists take care of compliance, road approvals, and clearances so your cargo moves without delays."
  },
  {
    title: "Heavy-Duty Equipment & Modern Fleet",
    description: "Equipped with extendable trailers, low loaders, and heavy-lift vehicles, we provide the right fleet to manage cargo of any size or weight — securely and efficiently."
  },
  {
    title: "End-to-End Support & Real-Time Updates",
    description: "From planning to delivery, we keep you updated with real-time tracking and 24/7 support. Our priority is transparency, so you know where your shipment is at every stage."
  }
];
const faqs = [
  {
    question: "What is considered oversize or out of gauge (OOG) cargo?",
    answer: "Oversize or out of gauge cargo refers to loads that exceed standard container dimensions — such as machinery, construction equipment, or extra-long/extra-wide freight that cannot fit inside a regular container."
  },
  {
    question: "Do I need special permits for transporting oversized cargo?",
    answer: "Yes, in most cases. Oversized loads require road permits and approvals from local authorities. Our team handles all permits and compliance to ensure smooth transport."
  },
  {
    question: "What equipment do you use for OOG cargo transport?",
    answer: "We use extendable trailers, low loaders, side loaders, flat racks, and heavy-lift vehicles depending on the cargo’s size, weight, and shape."
  },
  {
    question: "Can you provide escort vehicles for oversized loads?",
    answer: "Absolutely. If your cargo requires escort/pilot vehicles for road safety, we’ll arrange them as part of your transport solution."
  },
  {
    question: "How do you ensure the safety of oversized cargo during transport?",
    answer: "We use specialized strapping, secure loading techniques, and heavy-duty equipment. Our experienced operators follow strict safety protocols to keep your cargo secure."
  },
  {
    question: "Do you offer port-to-site and site-to-port OOG services?",
    answer: "Yes, we manage both directions — from picking up your cargo at the port and delivering it to your site, or collecting from your site and delivering to the port."
  },
  {
    question: "What areas do you service for oversized cargo in Sydney?",
    answer: "We cover the entire Sydney metropolitan region and surrounding areas, including major ports, warehouses, and industrial zones."
  },
  {
    question: "Can you handle urgent or time-sensitive oversized deliveries?",
    answer: "Yes. Depending on availability, we can arrange priority transport for urgent oversized shipments, while ensuring compliance and safety."
  },
  {
    question: "Do you offer storage or staging for OOG cargo?",
    answer: "Yes, if needed, we can arrange secure short-term storage or staging areas for oversized freight before final delivery."
  },
  {
    question: "How can I get a quote for oversized cargo transport?",
    answer: "Simply provide us with the cargo dimensions, weight, pickup and delivery locations, and timeframe. We’ll prepare a tailored quote and transport plan for your load."
  }
];

export default function HomePage() {
  return (
    <>
        
         <BannerHeroInnerPage
            H1="Oversize/Out of Gauge Cargo Services in Sydney"
            H2Span="Oversize/Out of Gauge Cargo"
            H2="Services Across Sydney and WorldWide"
            Content="We provide fast, secure, and affordable container freight solutions tailored to your needs. Trust our expert team to deliver your cargo safely and on time."
         />
        <TopContent
            title="Services in Sydney"
            titlespan="Oversize/Out of Gauge Cargo "
            subtitle="Professional, Reliable, and On-Time – Every Time"
            photo="/images/oversize-out-gauge-cargo-sydney/oversize-out-gauge-cargo-sydney-img-one.png"
            topparagraph="When it comes to moving oversize or out of gauge (OOG) cargo in Sydney, precision, safety, and specialized expertise are essential. We specialize in handling large, heavy, and irregularly shaped loads that cannot fit into standard containers. Whether it’s industrial machinery, construction equipment, or extra-long and wide freight, our dedicated team ensures seamless transport solutions from pick-up to final delivery. With detailed route planning, permits, and specialized equipment, we make sure your cargo reaches its destination securely and on time."
            topcontent={`<p>From managing port clearances to arranging escort vehicles and specialized trailers, our experienced logistics team takes care of every step. Backed by modern transport equipment, skilled operators, and 24/7 communication, we provide a reliable service that minimizes risks and delays. No matter how complex the cargo size or shape, we make the transport process straightforward, transparent, and efficient.</p>
              
            <p>Whether you are a business requiring ongoing oversized cargo shipments or a one-time heavy haul movement, we tailor our services to meet your needs. Our commitment to safety, compliance, and customer satisfaction means you can trust us to deliver every out of gauge load affordably, efficiently, and exactly as promised.</p>`}
        />
        <WhyChoose
        title="OUR OVERSIZE / OUT OF GAUGE CARGO SERVICES"
        titlecontent="Handling oversized and out of gauge cargo requires more than just transport — it requires planning, precision, and specialized expertise. With years of experience in managing heavy and irregular loads, we’ve become the trusted choice for businesses across Sydney. Here’s what sets our service apart:"
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
