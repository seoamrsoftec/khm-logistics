import Section from '@/components/sections/Section';
import styles from './About.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/sections/Container';
import SectionTitle from '@/components/sections/SectionTitle';
import { BsGlobeAmericas } from "react-icons/bs";
import { TbClock24 } from "react-icons/tb";
import Btn from '@/components/ui/BtnBorder';

export default function About() {
  return (
    <Section className={styles.aboutOne}>
      <Container>
        <div className="grid xl:grid-cols-2 gap-10">
            <div className="col">
                <SectionTitle
                    subtitle="Quality. Safety. Reliability."
                    titlespan="About"
                    title="Sydney Container Forwarders"
                />
            </div>  
            <div className="col">
                <SectionTitle
                    content="We're your go-to for tailored container solutions, perfect for businesses big and small. We stand out with our transparent pricing, real-time tracking, and top-notch customer support."
                />
                <div className='mt-6'>With a decade in logistics, we're experts in getting your containers where they need to be—safely, efficiently, and on time. Whether you need Transport Containers from port to door, flexible Storage & Warehouse options, seamless Freight Forwarding, or hassle-free Customs Clearance, our dedicated team and fleet have you covered across Sydney and New South Wales.</div>
            </div>
        </div>
        <div className="grid md:grid-cols-12 gap-10 lg:mt-10 xl:mt-20 mt-5">
            <div className=' md:col-span-7'>
                <Image src="/images/home/about/about-1.png" alt='' className={styles.aboutimg1} width={800} height={500}/>
            </div>
            <div className=' md:col-span-5'>
                <Image src="/images/home/about/about-2.jpeg" alt='' width={800} height={400}/>
                <div className="grid xl:grid-cols-2 gap-5 mt-6">
                    <div className={styles.AboutCol}>   
                        <div className={styles.AboutColTitle}>  
                            <div className={styles.Icon}><BsGlobeAmericas size={20} /></div>
                            <h3 className={styles.Title}>Worldwide Service</h3>
                        </div>
                        <p>Seamless global delivery, wherever your cargo needs to go.</p>
                    </div>  
                    <div className={styles.AboutCol}>   
                        <div className={styles.AboutColTitle}>  
                            <div className={styles.Icon}><TbClock24 size={20} /></div>
                            <h3 className={styles.Title}>24/7 Online Support</h3>
                        </div>
                        <p>Always on, always ready — assistance when you need it most.</p>
                    </div>
                </div>
                <div className="flex gap-4 mt-6">
                    <Link href="tel:+61415426195" className='btn primary'>
                        <span>+61 415 426 195</span>
                    </Link>
                    <Link href="/contact-us" className='btn'>
                        <span>Get a Quote</span>
                    </Link>
                </div>
            </div>
        </div>
      </Container>
    </Section>
  );
}