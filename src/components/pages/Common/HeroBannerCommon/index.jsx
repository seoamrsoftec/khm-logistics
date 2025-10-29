"use client";
import styles from "./HeroBannerCommon.module.css";
import Link from "next/link";

export default function HeroBannerCommon({
  bgImage,
  title,
  description,
  buttonText,
  buttonLink,
  overlayOpacity = 0.5,
}) {
  return (
    <section
      className={styles.HeroBanner}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div
        className={styles.Overlay}
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
      ></div>

      <div className={styles.ContentWrapper}>
        {title && <h1 className={styles.Title}>{title}</h1>}
        {description && <p className={styles.Description}>{description}</p>}
        {buttonText && buttonLink && (
          <Link href={buttonLink} className={styles.Button}>
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
}
