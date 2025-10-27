"use client";
import QuoteForm from '@/components/ContactForm/QuoteForm';
import styles from './WhyChoose.module.css';
import Container from "@/components/sections/Container";
import Section from "@/components/sections/Section";
import SectionTitle from "@/components/sections/SectionTitle";
import Image from "next/image";
import React from "react";
export default function WhyChoose ({subtitle, titlecontent, ctasubtitle, whyChoose,title}) {
  return (
    <Section className="py-16 bg-white">
        <Container>
            <div className="grid lg:grid-cols-2 gap-20">
                <div className='left'>
                    <SectionTitle
                        subtitle={subtitle || "Your Trusted Logistics Partner in Sydney"}
                        titlespan="Why Choose"
                        title={title || "Sydney Container Forwarders"}
                        content={titlecontent}
                    />
                    <div className="grid gap-10 mt-10">
                        {whyChoose.map((feature, index) => (
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
                                subtitle={ctasubtitle || "Get Your Free Container Transport Quote Today"}
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
      </Container>
    </Section>
  );
};