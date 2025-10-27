"use client";
import styles from './FinalCTA.module.css';
import Container from "@/components/sections/Container";
import Section from "@/components/sections/Section";
import Link from "next/link";
import { FaPhoneVolume,FaRegEnvelope} from "react-icons/fa6";
export default function FinalCTA() {
  return (
      <Section className={styles.CTA}>
          <Container>
          <div className={styles.CtaContentBox}>
              <div className={styles.CtaContent}>
                  <div className={styles.one}>
                      <div className={styles.number}><FaRegEnvelope  size={28} /></div>
                        <div>
                          <div className={styles.textSmall}>Email us</div>
                          <div className={styles.text}>info@sydneycontainer.com.au</div>
                      </div>
                  </div>
                  <Link href="tel:+61415426195" className={styles.two}>
                      <div className="pr-4">
                          <FaPhoneVolume size={28} />
                      </div>
                      <div>
                          <div className={styles.textSmall}>Call Now</div>
                          <div className={styles.text}>+61 415 426 195</div>
                      </div>
                  </Link>
              </div>
          </div>
          </Container>
   </Section>
  );
};
