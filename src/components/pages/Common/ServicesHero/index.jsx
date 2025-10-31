"use client";
import styles from "./ServicesHero.module.css";
import Image from "next/image";

const ServicesHero = ({ title, description, paragraphs = [], image, alt }) => {
  return (
    <section className={styles.servicesHero}>
      <div className={styles.container}>
        {/* LEFT IMAGE */}
        <div className={styles.imageWrapper}>
          <Image
            src={image}
            alt={alt}
            width={600}
            height={700}
            className={styles.image}
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>

          {paragraphs?.length > 0 && (
            <div className={styles.paragraphs}>
              {paragraphs.map((para, index) => (
                <p key={index} className={styles.point}>
                  {para}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
