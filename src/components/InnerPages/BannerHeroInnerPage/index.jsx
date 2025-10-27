"use client";
import { useRef } from "react";
import styles from './BannerHeroInnerPage.module.css';
import Link from "next/link";
import Container from "../../sections/Container";

export default function BannerHeroInnerPage({H1, H2, H2Span, Content}) {
  const videoRef = useRef(null);

  const handleFullscreen = () => {
    if (videoRef.current?.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };
  return (
    <section className={styles.HeroSection}>
        <Container>
            <div className="relative">
                <div className="relative z-10 text-white max-w-[1000px]">
                    <h1 className={styles.SubTitle}>{H1}</h1>
                    <h2 className={styles.HeroTitle}><span className={styles.TitleHighlight}>{H2Span}</span> {H2}</h2>
                    <div className="hero-text mt-3 mb-3 xl:text-xl md:text-md sm:text-sm">
                        {Content}
                    </div>
                    <div className="flex gap-4">
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
                        <circle cx="200" cy="200" r="200" className={styles.CircleOne} fill="#0044A5" fillOpacity="0.5" stroke="#fff" strokeWidth="0.5" />
                        <circle cx="420" cy="220" r="200" className={styles.CircleTwo} fill="#ecf0f1" fillOpacity="0.5" stroke="#fff" strokeWidth="0.5" />
                    </svg>
                </div>
            </div>
        </Container>
    </section>
  );
}
