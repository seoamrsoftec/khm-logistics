"use client";
import styles from "./WhyUsSection.module.css";
import Image from "next/image";

const WhyUsSection = () => {
  return (
    <section className={styles.whyUsSection}>
      <div className={styles.container}>
        {/* LEFT SIDE: CONTENT */}
        <div className={styles.left}>
          <p className={styles.smallHeading}>Why Choose Us</p>
          <h2 className={styles.title}>Go With Our Specializations</h2>
          <p className={styles.text}>
            Ready to optimize your freight flow? Contact <strong>KHM Logistics</strong>. 
            Our team ensures compliance with standards across borders, following insights 
            from <span className={styles.highlight}>Logistics Management Magazine</span>. 
            Ready to simplify your logistics? Contact us today for reliable{" "}
            <strong>Drayage Services USA</strong> tailored to your needs.
          </p>

          <div className={styles.imageBox}>
            <Image
              src="/images/home/why-us/why-us.png"
              alt="Why Us Image"
              width={800}
              height={800}
              className={styles.image}
            />
          </div>
        </div>

        {/* RIGHT SIDE: FORM */}
        <div className={styles.right}>
          <form className={styles.form}>
            <h3 className={styles.formTitle}>Get in Touch</h3>

            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" placeholder="Enter your phone" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="suburb">Suburb</label>
              <input type="text" id="suburb" placeholder="Enter your suburb" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="desc">Description</label>
              <textarea id="desc" rows="4" placeholder="Describe your shipment..." />
            </div>

            <button type="submit" className={styles.button}>Submit Inquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
