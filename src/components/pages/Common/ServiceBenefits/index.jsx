"use client";
import Container from "@/components/sections/Container";
import styles from "./ServiceBenefits.module.css";
import Image from "next/image";

export default function ServiceBenefits({ data }) {
  const { title, subtitle, benefits } = data;

  return (
    <section className={styles.benefitsSection}>
        <Container>
            <div className={styles.header}>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            {title && <h2 className={styles.title}>{title}</h2>}
            </div>

            <div className={styles.grid}>
            {benefits?.map((item, index) => (
                <div className={styles.card} key={index}>
                <div className={styles.iconWrapper}>
                    <Image
                    src={item.icon}
                    alt={item.title}
                    width={400}
                    height={400}
                    className={styles.icon}
                    />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.text}</p>
                </div>
            ))}
            </div>
        </Container>       
    </section>
  );
}
