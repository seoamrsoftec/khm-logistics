import ContactBanner from "@/components/pages/ContactUs/ContactBanner"
import FinalCTA from "@/components/sections/FinalCTA";

    export async function generateMetadata() {
    const siteUrl = 'https://www.sydneycontainer.com.au';
    const title = 'Contact us | Sydney Container Forwarders';
    const description = 'Get in touch with Sydney Container Forwarders for any queries or support. Our team is here to assist you with your taxi website design needs. Contact us today!';
    return {
        title, description,
        alternates: {
          canonical: `${siteUrl}/contact-us`,
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
export default function Contact() {
  return (
    <>
      <ContactBanner/>
      <FinalCTA/>
    </>
  );
}
