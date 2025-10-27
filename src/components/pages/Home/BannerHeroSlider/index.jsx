"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import styles from "./BannerHeroSlider.module.css";
import Link from "next/link";

const slideData = [
  { bgImage: "/images/bannerslider/1.png" },
  { bgImage: "/images/bannerslider/2.png" },
  { bgImage: "/images/bannerslider/3.png" },
  { bgImage: "/images/bannerslider/4.png" },
  { bgImage: "/images/bannerslider/5.png" },
];

export default function BannerHeroSlider() {
  return (
    <section className={styles.HeroSection}>
      <Swiper
        modules={[ Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className={styles.Heroswiper}
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={styles.HeroContainer}
              style={{
                backgroundImage: `url(${slide.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="text-center relative z-10 text-white max-w-[1000px] m-auto">
                <h1 className={styles.SubTitle}>
                  Container Transport Company Sydney
                </h1>
                <h2 className={styles.HeroTitle}>
                  <span className={styles.TitleHighlight}>Sydney</span> Container
                  Forwarders: Your Complete Containers Solutions
                </h2>
                <div className="hero-text mt-3 mb-3 xl:text-xl md:text-md sm:text-sm">
                  From local deliveries to long-term storage, we provide complete
                  logistics support throughout Sydney with a focus on reliability,
                  speed, and customer satisfaction.
                </div>
                <div className="flex justify-center gap-4">
                  <Link href="tel:+61415426195" className="btn secondary">
                    <span>+61 415 426 195</span>
                  </Link>
                  <Link href="/contact-us" className="btn">
                    <span>Get a Quote</span>
                  </Link>
                </div>
              </div>        
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
