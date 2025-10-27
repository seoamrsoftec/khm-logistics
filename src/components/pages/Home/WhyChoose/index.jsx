"use client";
import QuoteForm from '@/components/ContactForm/QuoteForm';
import styles from './WhyChoose.module.css';
import Container from "@/components/sections/Container";
import Section from "@/components/sections/Section";
import SectionTitle from "@/components/sections/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const features = [
  {
    title: "Reliable & On-Time Deliveries",
    description:"We prioritize punctuality and reliability to ensure your cargo reaches its destination exactly when it should — without delays."
  },
  {
    title: "Experienced Local Team",
    description:"Our Sydney-based team knows the ins and outs of port operations, local routes, and compliance — giving your cargo a seamless journey."
  },
  {
    title: "Modern Fleet & Equipment",
    description:"From standard to oversize containers, we’re equipped with advanced vehicles and lifting systems to handle every type of cargo safely."
  },
  {
    title: "Transparent Communication",
    description:"Stay informed at every stage. Our team provides real-time updates and is available 24/7 for support and coordination."
  },
];
export default function WhyChoose () {
  return (
    <Section className="py-16 bg-white">
        <Container>
            <div className="grid lg:grid-cols-2 gap-20">
                <div className='left'>
                    <SectionTitle
                        subtitle="Your Trusted Logistics Partner in Sydney"
                        titlespan="Why Choose"
                        title="Sydney Container Forwarders"
                        content="At Sydney Container Forwarders, we understand that logistics isn’t just about moving containers — it’s about delivering confidence, efficiency, and results. With over a decade of experience, we’re proud to be Sydney’s trusted partner for end-to-end container transport and forwarding solutions."
                    />
                    <div className="grid gap-10 mt-10">
                        {features.map((feature, index) => (
                            <div key={index} className={styles.WhyFeatures}>
                                <div>
                                    <h3 className={styles.Title}>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.WhyChooseCta}>
                    <div className=" relative">
                        <div className={styles.WhyCta}>
                            <SectionTitle
                                subtitle="Get Your Free Container Transport Quote Today"
                                title="Get in Touch Now!"
                                content="Fast. Accurate. No obligations."
                            />
                            <div className='mt-5'>
                                <QuoteForm/>
                            </div>
                        </div>
                        <div className={styles.float}>
                            <Image src="/images/why-choose-container-sydney.png" alt='' width={286} height={276}/>
                        </div>
                    </div>
                </div>
            </div>
      </Container>
    </Section>
  );
};