"use client";
import styles from './ServicesSection.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Btn from '@/components/ui/BtnBorder';
import UseDeviceSize from "@/components/hooks/UseDeviceSize";
import { ArrowRight, ArrowRightCircle } from "@deemlol/next-icons";
export default function ServicesSection () {
    const device = UseDeviceSize();
    const imageSize = {
        width: device === "tablet" ? 800 : 2000,
        height: device === "tablet" ? 600 : 1100,
    };
  const cards = [
    { 
      id: 1, 
      image: '/images/home/services/banner1.jpg', 
      title: 'Transport Container', 
      linkSource:'/transport-container-sydney',
      items: [
        { label: 'Sideloader Service', href: '/sideloader-service-sydney' },
        { label: 'Import Export Container', href: '/import-export-container-sydney' },
        { label: 'Oversize/Out of Gauge Cargo', href: '/oversize-out-gauge-cargo-sydney' },
        { label: 'LCL - Less than Container Load', href: '/lcl-sydney' },
        { label: 'Linehaul Transport', href: '/linehaul-transport-sydney' },
        { label: 'Refrigerated Transport', href: '/refrigerated-transport-sydney' }
      ]
    },

    {
       id: 2, 
      image: '/images/home/services/banner2.jpg', 
      title: 'Storage & Warehouse', 
      linkSource:'/storage-and-warehouse-sydney',
      items: [
        { label: 'Container Storage', href: '/container-storage-sydney' },
        { label: 'Cargo Storage', href: '/cargo-storage-sydney' },
        { label: 'Refrigerated Storage', href: '/refrigerated-storage-sydney' },
        { label: 'Cargo Unpack', href: '/cargo-unpack-sydney' }
      ]
    },
    { 
      id: 3, 
      image: '/images/home/services/banner3.jpg', 
      title: 'Freight Forwarding',
      linkSource:'/freight-forwarding-sydney' 
    },
    { 
      id: 4, 
      image: '/images/home/services/custom-c.png', 
      title: 'Customs Clearance', 
      linkSource:'/Ccustoms-clearance-sydney' 
    }
  ]; 
return (
    <section className={styles.ServicesSection}>         
        <div className={`${styles.ServicesContainer} grid md:grid-cols-2 gap-[15px]`}>
            {cards.map((card) => (
            <div className={styles.Card} key={card.id}>
                <div className={styles.ImageWrapper}>
                    <Image src={card.image} alt={card.title} width={imageSize.width} height={imageSize.height} className={styles.Image} />
                    {(device === "tablet" || device === "mobile") && (
                        <div className={styles.TitleWrapper}>
                            <h2 className={styles.Title}>{card.title}</h2>
                            <div className={styles.Btn}>
                                <ArrowRightCircle />
                            </div>
                        </div>
                    )}
                </div>
                    <div className={styles.ContentWrapper}>
                        {device !== "tablet" && device !== "mobile" && (
                       <h2 className={styles.Title}>{card.title}</h2>
                       )}

                    {card.items && card.items.length > 0 && (
                        <ul className={styles.ItemList}>
                            {card.items.map((item, index) => (
                                <li key={index} className={styles.Item}>
                                    <Link href={item.href} className={styles.ItemLink}>
                                        <span>{item.label}</span>
                                        <span><ArrowRightCircle size={16} /></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                    {device !== "tablet" && device !== "mobile" && (
                        <div className={styles.Btn}><Btn href={card.linkSource} name={`Explore ${card.title}`}/></div>
                    )}
                </div>
            </div>
            ))}
        </div>
    </section>
  );

};
