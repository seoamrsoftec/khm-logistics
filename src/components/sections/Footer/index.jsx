import Link from "next/link";
import Image from "next/image";
import Container from "@/components/sections/Container";
import styles from "./Footer.module.css";
import LogoWhite from "@/components/svg/LogoWhite";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className={styles.Footermain}>
        <Container>
          <div className={styles.Footerinner}>
            <div className="grid grid-cols-12 px-[10px] footer_grid justify-center gap-y-10 gap-3 xl:gap-10 text-[14px] md:text-[16px]">
              <div className="col-span-12 md:col-span-4 lg:col-span-4">
                <div className="">
                  <div className="footer-col">
                    <div className={styles.Footerlogo}>
                      <div>
                         <Image src="/images/logo/khm-logo-wht.png" alt="Sydney Container Logo" width={500} height={202} className="w-[150px] h-auto"/>
                      </div>
                    </div>
                    <h3 className={styles.footerTitle}>
                      About KHM Logistics
                    </h3>
                    <p>
                      From local deliveries to long-term storage, we provide
                      complete logistics support throughout Sydney with a focus
                      on reliability, speed, and customer satisfaction.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 lg:col-span-3">
                <div className="footer-col">
                  <h3 className={styles.footerTitle}>Quick Links</h3>
                  <div className={styles.footerLinks}>
                    <ul className=" grid gap-3">
                    <li>
                        <Link href="/">
                         Home
                        </Link>
                      </li>
                      <li>
                        <Link href="/#">
                         About
                        </Link>
                      </li>
                      <li>
                        <Link href="/#">
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/#">
                         Why Choose Us
                        </Link>
                      </li>
                      <li>
                        <Link href="/#">
                         Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-span-6 md:col-span-4 lg:col-span-3">
                <div className="footer-col">
                  <h3 className={styles.footerTitle}>Services</h3>
                  <div className={styles.footerLinks}>
                    <ul className=" grid gap-3">
                      <li>
                        <Link href="/#">
                        Supply Chain
                        </Link>
                      </li>
                      <li>
                        <Link href="/#">
                        Transloading Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/lcl-sydney">
                        Warehouse Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/#">
                        Intermodal Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/#">
                        Hazmat Services
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>             
              <div className="col-span-12 md:col-span-4 lg:col-span-2">
                <div className="footer-col">
                  <h3 className={styles.footerTitle}>Contact</h3>
                  <div className={styles.footerLinks}>
                    <ul className=" grid gap-3">
                      <li>
                        <Link href="mailto:info@sydneycontainer.com.au">
                          info@khmlogistics.com
                        </Link>
                      </li>
                      {/* <li>
                        <Link href="tel:0430 960 265">0430 960 265</Link>
                      </li>
                      <li>
                        <Link href="tel:0415 426 195">0415 426 195</Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
                {/* <div className="mt-6 ">
                  <h3 className={styles.footerTitle}>
                    Follow KHM Logistics
                  </h3>
                  <div className="footer-social grid grid-cols-5 mt-3">
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="/images/social/fb.svg"
                        alt=""
                        width={30}
                        height={30}
                        className="w-8 invert "
                      />
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="/images/social/in.svg"
                        alt=""
                        width={30}
                        height={30}
                        className="w-8 invert"
                      />
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="/images/social/x.svg"
                        alt=""
                        width={30}
                        height={30}
                        className="w-8 invert"
                      />
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="/images/social/ins.svg"
                        alt=""
                        width={30}
                        height={30}
                        className="w-8 invert"
                      />
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="/images/social/yt.svg"
                        alt=""
                        width={30}
                        height={30}
                        className="w-8 invert ml-[-10px]"
                      />
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="footer-bottom border-t-[1px] mt-8 pt-4 md:pb-4">
              <div className="md:flex justify-center items-center text-center">
                <div className="text-[14px]">
                  ©{currentYear}{" "}
                  <span className={styles.footerLinks}>
                  KHM Logistics Website Development by {" "}
                    <Link
                      href="https://www.amrsoftec.com/"
                      className="text-[--secondary] hover:underline"
                    >
                       AMRsoftec
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}
