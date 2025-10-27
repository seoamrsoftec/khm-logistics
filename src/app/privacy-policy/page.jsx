import Link from "next/link";
import Container from "@/components/sections/Container";
import ContentSection from "@/components/sections/ContentSection";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import FinalCTA from "@/components/sections/FinalCTA";

export async function generateMetadata() {
    const siteUrl = 'https://www.mycabportal.com';
    return {
        title: `Privacy Policy | My Cab Portal`,
        description: `Learn how MyCabPortal collects, uses, and protects your data. We respect your privacy, keep your information secure, and never share it without your consent. Simple, transparent, and user-first.`,
        alternates: {
          canonical: `${siteUrl}/privacy-policy`,
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
                    <h1 className="mb-2 text-[--primary]">Privacy Policy</h1>
                    <p className="mb-2"><strong>Last Updated: 8 May 2025</strong> </p>
                    <p className="mb-4">At MyCabPortal, your privacy matters. Here’s a quick overview of how we protect and respect your data:</p>
                   
                    <ContentSection>
                        <h2 >1. We Collect Only What’s Needed</h2>
                            <ul>
                                <li>Basic personal info: Name, email, phone number.</li>
                                <li>Taxi business details: Fare structure, service areas, contact info.</li>
                            </ul>
                        <h2>2. Your Data, Your Control</h2>
                            <p>You can access, update, or request deletion of your information at any time. We don’t sell or share your data with marketers—ever.</p>                           
                        <h2>3. Data Protection</h2>                       
                            <ul>
                                <li>Your data is encrypted and stored securely.</li>
                                <li>You’re free to cancel your subscription with no hidden barriers.</li>
                                <li>We honor your privacy rights and respond promptly to any requests.</li>
                            </ul>
                        <h2>4. Your Choices & Control</h2>                        
                            <ul>
                                <li>You can edit or delete your personal and business data anytime.</li>
                                <li><strong>No refunds are provided</strong> after payment is processed.</li>
                                <li>Subscriptions can be canceled anytime, and access will continue until the end of the billing cycle.</li>
                            </ul>
                        <h2>5. Contact & Updates</h2>
                            <ul>
                                <li>This policy may evolve—continued use means you accept any updates.</li>
                                <li>Have concerns? Reach out at  mycabportal@gmail.com  or call at: +91 8427332025.</li>
                                <li>We're transparent and here to help, always.</li>
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

