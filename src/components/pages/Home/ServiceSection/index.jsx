"use client";
import Image from "next/image";
import styles from "./ServiceSection.module.css";
import SectionTitle from "@/components/sections/SectionTitle";

const services = [
  {
    id: "01",
    title: "Supply Chain Services",
    image: "/images/home/service-section/service1.webp",
    link: "/supply-chain",
  },
  {
    id: "02",
    title: "Transloading Services",
    image: "/images/home/service-section/service2.webp",
    link: "/transloading",
  },
  {
    id: "03",
    title: "Intermodal Services",
    image: "/images/home/service-section/service3.webp",
    link: "/intermodal",
  },
  {
    id: "04",
    title: "Warehouse Services",
    image: "/images/home/service-section/service4.webp",
    link: "/warehouse",
  },
  {
    id: "05",
    title: "Hazmat Services",
    image: "/images/home/service-section/service5.webp",
    link: "/hazmat",
  },
];

export default function ServiceSection() {
  return (
    <>
      <section className="pb-[50px] lg:pb-[100px]">
        <div className={styles.header}>
          <SectionTitle title="Our Drayage Services" />
          <p>
            At <strong>KHM Logistics</strong> | Experts in drayage, hazmat & transloading across the , 
            we’re committed to providing specialized freight solutions that move your business forward. 
            Our operations are built for speed, safety, and efficiency—whether you need container drayage, 
            warehouse transloading, or certified hazmat handling.
          </p>
        </div>
        <div className={styles.serviceSection}>
          
          {services.map((service) => (
            <a key={service.id} href={service.link} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={720}
                  height={1080}
                  className={styles.image}
                  priority
                />
                <div className={styles.overlay}></div>
              </div>

              <div className={styles.cardContent}>
                <span className={styles.cardNumber}>{service.id}</span>
                <div className={styles.cardBottom}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <span className={styles.arrow}>➜</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
