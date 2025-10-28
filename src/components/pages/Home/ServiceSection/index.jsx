"use client";

import styles from "./ServiceSection.module.css";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Supply Chain Services USA",
    image: "/images/service1.jpg",
    link: "/services/supply-chain",
  },
  {
    id: "02",
    title: "Transloading Services USA",
    image: "/images/service2.jpg",
    link: "/services/transloading",
  },
  {
    id: "03",
    title: "Intermodal Services USA",
    image: "/images/service3.jpg",
    link: "/services/intermodal",
  },
  {
    id: "04",
    title: "Warehouse Services USA",
    image: "/images/service4.jpg",
    link: "/services/warehouse",
  },
  {
    id: "05",
    title: "Hazmat Services USA",
    image: "/images/service5.jpg",
    link: "/services/hazmat",
  },
];

export default function ServiceSection() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.header}>
        <h2>Our Drayage Services</h2>
        <p>
          At <strong>KHM Logistics</strong> | Experts in drayage, hazmat & transloading across the USA, 
          we’re committed to providing specialized freight solutions that move your business forward. 
          Our operations are built for speed, safety, and efficiency—whether you need container drayage, 
          warehouse transloading, or certified hazmat handling.
        </p>
      </div>

      <div className={styles.servicesGrid}>
        {services.map((service) => (
          <Link key={service.id} href={service.link} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={service.image}
                alt={service.title}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={styles.overlay}></div>
              <div className={styles.textContent}>
                <span className={styles.number}>{service.id}</span>
                <h3>{service.title}</h3>
                <span className={styles.arrow}>➜</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
