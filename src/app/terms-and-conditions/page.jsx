import Link from "next/link";
import Container from "@/components/sections/Container";
import ContentSection from "@/components/sections/ContentSection";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import FinalCTA from "@/components/sections/FinalCTA";

export async function generateMetadata() {
    const siteUrl = 'https://www.mycabportal.com';
    return {
        title: `Terms and Conditions | My Cab Portal`,
        description: `Discover the terms and conditions for using MyCabPortal — a platform built to help taxi service providers create, manage, and grow their own booking websites. Transparent policies, clear guidelines, and full control over your business.`,
        alternates: {
          canonical: `${siteUrl}/terms-and-conditions`,
        },
       
      };
    }

export default function Home() {
 
      const PageMeta = {
        title: 'Terms and Conditions | My Cab Portal',
        description:'Review the Terms and Conditions of My Cab Portal’s taxi services, which outline the rules and guidelines for booking and using our services. By accessing our platform, you agree to comply with these terms for a seamless experience.'
    };
      
  return (
    <>
       <Header/>
        <section className="pt-[100px] pb-[50px] bg-black text-white">
            <Container>
                <div className="max-w-[800px] m-auto">
                    <h1 className="mb-2 text-[--primary]">Terms And Conditions</h1>
                    <p className="mb-2"><strong>Last Updated: 8 May 2025</strong> </p>
                    <p className="mb-4">These Terms & Conditions govern the use of MyCabPortal, a platform that enables taxi service providers to create and manage their own taxi booking websites.
                    By signing up or using our services, you agree to the terms below.</p>
                   
                    <ContentSection>
                        <h2 >1. Service Overview</h2>
                            <p>MyCabPortal provides website-building and management tools specifically designed for taxi service businesses. Each provider gets their own website with booking features, admin panel access, and optional route/tariff pages.</p>
                        <h2>2. Account & Subscription</h2>
                            <ul>
                                <li>Each taxi provider must create an account to use the service.</li>
                                <li>Subscription fees are charged monthly or yearly, depending on the chosen plan.</li>
                                <li>Failure to pay may result in temporary suspension or removal of the website.</li>
                            </ul>
                        <h2>3. Website Usage</h2>                       
                            <ul>
                                <li>Providers are responsible for the content (e.g., fare, contact info, service areas) they add to their websites.</li>
                                <li>MyCabPortal is not liable for any misinformation, pricing errors, or disputes between taxi providers and their customers.</li>
                                <li>Websites must not contain any unlawful or misleading content.</li>
                            </ul>
                        <h2>4. Payments & Refunds</h2>                        
                            <ul>
                                <li>Payments are accepted via UPI, card, or other listed methods.</li>
                                <li><strong>No refunds are provided</strong> after payment is processed.</li>
                                <li>Subscriptions can be canceled anytime, and access will continue until the end of the billing cycle.</li>
                            </ul>
                        <h2>5. Support & Maintenance</h2>
                            <ul>
                                <li>Technical support is available via email and WhatsApp.</li>
                                <li>We strive to ensure 99% uptime, but occasional maintenance or outages may occur.</li>
                            </ul>                       
                        <h2>6. Termination</h2>
                            <ul>
                                <li>MyCabPortal reserves the right to suspend or terminate accounts that violate these terms, misuse the platform, or fail to pay.</li>
                            </ul>
                        <h2>7. Limitation of Liability</h2>
                            <ul>
                                <li>MyCabPortal is not responsible for business losses, missed bookings, or customer complaints related to third-party taxi operations.</li>
                            </ul>
                        <h2>8. Modifications</h2>
                            <ul>
                                <li>These terms may be updated occasionally. Continued use of the platform implies acceptance of any changes.</li>
                            </ul>
                        <h2>9. Contact Information</h2>
                            <p>For questions or support, contact us:</p>
                            <ul className="space-y-1">
                                <li><strong>Email:</strong> mycabportal@gmail.com</li>
                                <li><strong>Phone:</strong> +91 8427-33-20-25</li>
                            </ul>
                        <div className="flex justify-center mt-10">
                            <Link href="/" className="inline-block px-4 py-2 text-xl sm:text-2xl md:text-3xl font-bold text-center text-black bg-[--primary] rounded-lg border-4 border-white hover:bg-[--primary-dark] transition-colors"
                            >
                                Back to Home
                            </Link>
                        </div>
                    </ContentSection>
                </div>
            </Container>
        </section>
        <FinalCTA/>
        <Footer/>
              
    </>
    )
}

