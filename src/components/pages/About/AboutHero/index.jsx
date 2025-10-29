"use client";
import styles from "./AboutHero.module.css";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className={styles.AboutHero}>
      <div className={styles.Container}>
        {/* Left: Image */}
        <div className={styles.ImageWrapper}>
          <Image
            src="/images/about/about-hero.jpg"
            alt="KHM Logistics - Trucking and Logistics Services USA"
            fill
            className={styles.Image}
            priority
          />
        </div>

        {/* Right: Content */}
        <div className={styles.Content}>
          <span className={styles.SectionLabel}>About Us</span>
          <h2 className={styles.Title}>
            Our Specialized & Logistics Solutions Across the USA
          </h2>

          <p className={styles.Text}>
            At <strong>KHM Logistics</strong>, we understand that every shipment
            is different. That’s why we offer{" "}
            <strong>trucking services USA</strong> businesses can depend on —
            no matter how complex the load or how far the destination. From
            pickup to final delivery, our experienced team handles each shipment
            with care and precision, ensuring your goods are safe, secure, and
            delivered on time.
          </p>

          <p className={styles.Text}>
            What sets us apart in the world of{" "}
            <strong>trucking services in the USA</strong> is our ability to
            manage a wide variety of specialized freight. Whether you need
            flatbed transport, container drayage, or secure movement of hazmat
            materials, we have the equipment and expertise to get the job done
            right.
          </p>

          <p className={styles.Text}>
            Backed by a commitment to customer service and real-time support,
            <strong> KHM Logistics</strong> simplifies your supply chain. As
            your trusted partner for <strong>trucking services USA</strong>,
            we’re focused on building long-term relationships grounded in
            transparency, efficiency, and results.
          </p>
        </div>
      </div>
    </section>
  );
}
