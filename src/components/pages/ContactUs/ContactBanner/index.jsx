"use client";
import Container from '@/components/sections/Container';
import Section from '@/components/sections/Section';
import SectionTitle from '@/components/sections/SectionTitle';
import styles from './ContactBanner.module.css';
import QuoteForm from '@/components/ContactForm/QuoteForm';
import Image from 'next/image';
import UseDeviceSize from "@/components/hooks/UseDeviceSize";
import Link from 'next/link';
import { ArrowRightCircle, Email, MapPin, PhoneCall } from '@deemlol/next-icons';
import { BsGlobeAmericas } from 'react-icons/bs';
export default function ContactBanner() {
    const device = UseDeviceSize();
  return (
    <Section>
        <Container>
            <div className="xl:grid xl:grid-cols-12 gap-20">
                <div className="col-span-6">
                    <SectionTitle
                        subtitle="Reach Us"
                        title="with Sydney Container Forwarders"
                        titlespan="Contact us"
                        content="Have questions or need a quote? Our team is ready to assist you with all your container transport, import, and export needs. Whether you're a business or an individual, we offer reliable support and expert advice. Reach out via phone, email, or the contact form below — we’ll respond promptly."
                    />
                    {device !== "tablet" && device !== "mobile" && (
                        <div className="grid xl:grid-cols-2 gap-5 mt-10">
                            <div className={styles.ContactCol}>   
                                <div className={styles.ContactColTitle}>  
                                    <div className={styles.Icon}><PhoneCall/></div>
                                    <h3 className={styles.Title}>Call Us</h3>
                                </div>
                                <p>0430 960 265</p>
                            </div>
                            <div className={styles.ContactCol}>   
                                <div className={styles.ContactColTitle}>  
                                    <div className={styles.Icon}><PhoneCall/></div>
                                    <h3 className={styles.Title}>Call Us</h3>
                                </div>
                                <p>0415 426 195</p>
                            </div>
                            <div className={styles.ContactCol}>   
                                <div className={styles.ContactColTitle}>  
                                    <div className={styles.Icon}><Email/></div>
                                    <h3 className={styles.Title}>Email</h3>
                                </div>
                                <p>info@sydneycontainer.com.au</p>
                            </div>
                            <div className={styles.ContactCol}>   
                                <div className={styles.ContactColTitle}>  
                                    <div className={styles.Icon}><MapPin/></div>
                                    <h3 className={styles.Title}>Address</h3>
                                </div>
                                <p>Botany, NSW 2019, AU</p>
                            </div>
                        </div>
                    )}
                </div>
                {device !== "tablet" && device !== "mobile" ? (
                    <div className="col-span-6">
                        <div className={styles.ContactFromSection}>
                            <div className=" relative">
                                <div className={styles.ContactFrom}>
                                    <SectionTitle
                                        subtitle="Free Container Transport Quote"
                                        title="Get in Touch Now!"
                                        content="Fast. Accurate. No obligations."
                                    />
                                    <div className='mt-5'>
                                        <QuoteForm/>
                                    </div>
                                </div>
                                <div className={styles.float}>
                                    <Image src="/images/why-choose-container-sydney.png" alt='Container Transport Sydney' width={286} height={276}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    ) : (
                    <div className="md:grid md:grid-cols-12 gap-10 mt-10">
                        <div className="col-span-6">
                            <div className="grid xl:grid-cols-2 gap-5 mt-10">
                                <div className={styles.ContactCol}>   
                                    <div className={styles.ContactColTitle}>  
                                        <div className={styles.Icon}><PhoneCall/></div>
                                        <h3 className={styles.Title}>Call Us</h3>
                                    </div>
                                    <p>0430 960 265</p>
                                </div>
                                <div className={styles.ContactCol}>   
                                    <div className={styles.ContactColTitle}>  
                                        <div className={styles.Icon}><PhoneCall/></div>
                                        <h3 className={styles.Title}>Call Us</h3>
                                    </div>
                                    <p>0415 426 195</p>
                                </div>
                                <div className={styles.ContactCol}>   
                                    <div className={styles.ContactColTitle}>  
                                        <div className={styles.Icon}><Email/></div>
                                        <h3 className={styles.Title}>Email</h3>
                                    </div>
                                    <p>info@sydneycontainer.com.au</p>
                                </div>
                                <div className={styles.ContactCol}>   
                                    <div className={styles.ContactColTitle}>  
                                        <div className={styles.Icon}><MapPin/></div>
                                        <h3 className={styles.Title}>Address</h3>
                                    </div>
                                    <p>Botany, NSW 2019, AU</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-6">
                            <div className={styles.ContactFromSection}>
                                <div className=" relative">
                                    <div className={styles.ContactFrom}>
                                        <SectionTitle
                                            subtitle="Free Container Transport Quote"
                                            title="Get in Touch Now!"
                                            content="Fast. Accurate. No obligations."
                                        />
                                        <div className='mt-5'>
                                            <QuoteForm/>
                                        </div>
                                    </div>
                                    <div className={styles.float}>
                                        <Image src="/images/why-choose-container-sydney.png" alt='Container Transport Sydney' width={286} height={276}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Container>
    </Section>
  );
}
