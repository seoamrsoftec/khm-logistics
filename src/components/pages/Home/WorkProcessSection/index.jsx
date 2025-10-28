"use client";

import Image from "next/image";
import styles from "./WorkProcessSection.module.css";
import SectionTitle from "@/components/sections/SectionTitle";
import Container from "@/components/sections/Container";

const steps = [
  {
    id: "01",
    title: "Request / Quote",
    desc:
      "It starts with your shipment details—freight type, dimensions, weight, origin, destination, and timeline — and we provide a tailored quote within hours.",
    image: "/images/home/service-section/1.png",
  },
  {
    id: "02",
    title: "Carrier Vetting",
    desc:
      "We match your shipment with pre-vetted, qualified carriers based on safety, reliability, compliance, and route efficiency.",
    image: "/images/home/service-section/2.png",
  },
  {
    id: "03",
    title: "Paperwork",
    desc:
      "From Bills of Lading (BOL) to customs documents, we manage every detail to ensure smooth pickup, transit, and delivery.",
    image: "/images/home/service-section/3.png",
  },
  {
    id: "04",
    title: "Delivery",
    desc:
      "Your shipment is monitored from dispatch to delivery. We provide real-time and proactive updates — and confirm delivery with all required proof.",
    image: "/images/home/service-section/4.png",
  },
];

export default function WorkProcessSection() {
  return (
    <section className={`${styles.wrapper} pb-[50px] lg:pb-[100px]`} aria-labelledby="work-process-heading">
      <Container>
      <div className={styles.topIntro}>            
        <h2 id="work-process-heading" className={styles.heading}>
          Logistics Workflow
        </h2>
      </div>

      <div className={styles.canvas}>
        {/* SVG dashed / dotted connecting path placed behind the steps */}
        <svg
          className={styles.pathSvg}
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* a gentle curved dashed path */}
          <path
            d="M40 120 C 250 40, 450 160, 640 80 C 820 10, 980 120, 1160 80"
            fill="none"
            stroke="#ef9f2f"
            strokeWidth="2.5"
            strokeDasharray="8 10"
            strokeLinecap="round"
            opacity="0.8"
          />
          {/* small heart / icon at end */}
          <g transform="translate(1160, 80)" opacity="0.9">
            <circle cx="0" cy="0" r="12" fill="#fff"></circle>
            <path
              d="M-5 0 C -5 -6, 0 -7, 0 -3 C 0 -7, 5 -6, 5 0 C 5 6, 0 9, 0 12 C 0 9, -5 6, -5 0 Z"
              fill="#ef9f2f"
              transform="scale(0.9)"
            />
          </g>
        </svg>

        <div className={styles.stepsRow}>
          {steps.map((s, idx) => (
            <div key={s.id} className={styles.step}>
              <div className={styles.circleWrap}>
                {/* circular image */}
                <div className={styles.circle}>
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className={styles.img}
                    sizes="(max-width: 768px) 180px, 220px"
                  />
                  <div className={styles.circleOverlay} />
                </div>

                {/* number badge */}
                <div className={styles.badge}>
                  <span>{s.id}</span>
                </div>
              </div>

              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
      </Container>
    </section>
  );
}
