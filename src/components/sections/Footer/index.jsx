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
              <div className="col-span-12 md:col-span-4 lg:col-span-3">
                <div className="">
                  <div className="footer-col">
                    <div className={styles.Footerlogo}>
                      <div>
                        <LogoWhite />
                      </div>
                    </div>
                    <h3 className={styles.footerTitle}>
                      About Sydney Container
                    </h3>
                    <p>
                      From local deliveries to long-term storage, we provide
                      complete logistics support throughout Sydney with a focus
                      on reliability, speed, and customer satisfaction.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 lg:col-span-2">
                <div className="footer-col">
                  <h3 className={styles.footerTitle}>Services</h3>
                  <div className={styles.footerLinks}>
                    <ul className=" grid gap-3">
                      <li>
                        <Link href="/transport-container-sydney">
                          Transport Container
                        </Link>
                      </li>
                      <li>
                        <Link href="/storage-and-warehouse-sydney">
                          Storage & Warehouse
                        </Link>
                      </li>
                      <li>
                        <Link href="/freight-forwarding-sydney">
                          Freight Forwarding
                        </Link>
                      </li>
                      <li>
                        <Link href="/Ccustoms-clearance-sydney">
                          Customs Clearance
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-span-6 md:col-span-4 lg:col-span-2">
                <div className="footer-col">
                  <h3 className={styles.footerTitle}>Transport Container</h3>
                  <div className={styles.footerLinks}>
                    <ul className=" grid gap-3">
                      <li>
                        <Link href="/import-export-container-sydney">
                          Import Export Container
                        </Link>
                      </li>
                      <li>
                        <Link href="/oversize-out-gauge-cargo-sydney">
                          Oversize/Out of Gauge Cargo
                        </Link>
                      </li>
                      <li>
                        <Link href="/lcl-sydney">
                          LCL - Less than Container Load
                        </Link>
                      </li>
                      <li>
                        <Link href="/linehaul-transport-sydney">
                          Linehaul Transport
                        </Link>
                      </li>
                      <li>
                        <Link href="/refrigerated-transport-sydney">
                          Refrigerated Transport
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-span-6 md:col-span-4 lg:col-span-2">
                <div className="footer-col">
                  <h3 className={styles.footerTitle}>Storage & Warehouse</h3>
                  <div className={styles.footerLinks}>
                    <ul className=" grid gap-3">
                      <li>
                        <Link href="/container-storage-sydney">
                          Container Storage
                        </Link>
                      </li>
                      <li>
                        <Link href="/cargo-storage-sydney">Cargo Storage</Link>
                      </li>
                      <li>
                        <Link href="/refrigerated-storage-sydney">
                          Refrigerated Storage
                        </Link>
                      </li>
                      <li>
                        <Link href="/cargo-unpack-sydney">Cargo Unpack</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 lg:col-span-3">
                <div className="footer-col">
                  <h3 className={styles.footerTitle}>Contact</h3>
                  <div className={styles.footerLinks}>
                    <ul className=" grid gap-3">
                      <li>
                        <Link href="mailto:info@sydneycontainer.com.au">
                          info@sydneycontainer.com.au
                        </Link>
                      </li>
                      <li>
                        <Link href="tel:0430 960 265">0430 960 265</Link>
                      </li>
                      <li>
                        <Link href="tel:0415 426 195">0415 426 195</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 ">
                  <h3 className={styles.footerTitle}>
                    Follow Sydney Container{" "}
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
                </div>
              </div>
            </div>
            <div className="footer-bottom border-t-[1px] mt-8 pt-4 md:pb-4">
              <div className="md:flex justify-center items-center text-center">
                <div>
                  ©{currentYear}{" "}
                  <span className={styles.footerLinks}>
                    Sydney Container Website Development by{" "}
                    <Link
                      href="https://www.amrsoftec.com/"
                      className="text-blue-500 hover:underline"
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
