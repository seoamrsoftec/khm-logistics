"use client";
import { useRef } from "react";
import styles from './BannerHero.module.css';
import Link from "next/link";
import Section from "@/components/sections/Section";
import Container from "@/components/sections/Container";
import Btn from "@/components/ui/BtnBorder";

export default function BannerHero() {
  const videoRef = useRef(null);

  const handleFullscreen = () => {
    if (videoRef.current?.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };
  return (
    <section className={styles.HeroSection}>
         <div className={styles.HeroContainer}>
            <div className="text-center relative z-10 text-white max-w-[1000px] m-auto">
                <h1 className={styles.SubTitle}>Container Transport Company Sydney</h1>
                <h2 className={styles.HeroTitle}><span className={styles.TitleHighlight}>Sydney</span>  Container Forwarders: Your Complete  Containers Solutions</h2>
                <div className="hero-text mt-3 mb-3 xl:text-xl md:text-md sm:text-sm">
                    From local deliveries to long-term storage, we provide complete logistics support throughout Sydney with a focus on reliability, speed, and customer satisfaction.
                </div>
                <div className="flex justify-center gap-4">
                    <Link href="tel:+61415426195" className='btn secondary'>
                        <span>+61 415 426 195</span>
                    </Link>
                    <Link href="/contact-us" className='btn'>
                        <span>Get a Quote</span>
                    </Link>
                </div>
            </div>
            <div className={styles.Circle}>
                <svg width="100%" height="100%" viewBox="0 0 620 420" xmlns="http://www.w3.org/2000/svg" className="">
                    <circle cx="200" cy="200" r="200" className={styles.CircleOne} fill="#0044A5" fillOpacity="0.5" />
                    <circle cx="420" cy="220" r="200" className={styles.CircleTwo} fill="#ecf0f1" fillOpacity="0.5" stroke="#fff" strokeWidth="0.5" />
                </svg>
            </div>
         </div>
    </section>
  );
}
