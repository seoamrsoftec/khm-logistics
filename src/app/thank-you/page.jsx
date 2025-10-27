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
                    <h1 className="mb-2 text-[--primary]">Thank You</h1>
                </div>
            </Container>
        </section>
    </>
    )
}

