"use client";
import Image from "next/image";
import styles from "./AboutHero.module.css";
import Container from "@/components/sections/Container";

export default function AboutHero() {
  return (
    <section className="py-[50px] lg:py-[100px]">
      <Container>
        <div className={styles.inner}>
          {/* IMAGE SIDE */}
          <div className={styles.imageSide}>
            <Image
              src="/images/about/abt-hero/hero-abt.png"
              alt="KHM Logistics Trucking Services USA"
              height={1080}
              width={1080}
              className={styles.image}
              priority
            />
          </div>

          {/* CONTENT SIDE */}
          <div className={styles.contentSide}>
            <span className={styles.label}>About Us</span>
            <h2 className={styles.title}>
              Reliable & Specialized Logistics Across the USA
            </h2>
            <p className={styles.text}>
              At <strong>KHM Logistics</strong>, we deliver reliable and flexible{" "}
              <strong>trucking services across the USA</strong> — ensuring that
              every shipment, big or small, reaches its destination on time and in
              perfect condition.
            </p>
            <p className={styles.text}>
              With a modern fleet and access to specialized equipment, we handle
              everything from standard freight to unique, high-value loads. Every
              delivery is treated with precision, transparency, and care.
            </p>
            <p className={styles.text}>
              Backed by a dedicated team and real-time support,{" "}
              <strong>KHM Logistics</strong> stands for efficiency, safety, and
              reliability — helping businesses move forward with confidence.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
