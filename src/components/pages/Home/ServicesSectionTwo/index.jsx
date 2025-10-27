"use client";
import styles from './ServicesSectionTwo.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Btn from '@/components/ui/BtnBorder';
import UseDeviceSize from "@/components/hooks/UseDeviceSize";
import { ArrowRightCircle } from "@deemlol/next-icons";
import Section from '@/components/sections/Section';
import ContainerFluid from '@/components/sections/ContainerFluid';
import Container from '@/components/sections/Container';
import SectionTitle from '@/components/sections/SectionTitle';
export default function ServicesSectionTwo () {
    const device = UseDeviceSize();
     const imageSize = {
        width: device === "tablet" ? 550 : 550,
        height: device === "tablet" ? 400 : 724,
    };
  const cards = [
    { 
      id: 1, 
      image: '/images/home/services/service-1.jpg', 
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
      image: '/images/home/services/service-2.jpg', 
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
      image: '/images/home/services/service-3.jpg', 
      title: 'Freight Forwarding',
      linkSource:'/freight-forwarding-sydney',
      description:'It must be aligned within a firm to have the most efficient effect.' 
    },
    { 
      id: 4, 
      image: '/images/home/services/custom-c.png', 
      title: 'Customs Clearance', 
      linkSource:'/customs-clearance-sydney',
      description:'It must be aligned within a firm to have the most efficient effect.' 
    }
  ]; 

  return (
    <Section className={styles.ServicesSection}>
        <Container>
            <SectionTitle
                subtitle="What we offer"
                titlespan="Your End-to-End Container Solutions:"
                title=" Transport, Storage, Freight & Customs"
                content="From port to warehouse and beyond — our Sydney-based transport services ensure smooth, secure, and on-time delivery."
            />
        </Container>
        <ContainerFluid>
            <div className={`${styles.ServicesContainer} grid xl:grid-cols-4 md:grid-cols-2 gap-[15px] mt-20`}>
                {cards.map((card) => (
                <div className={styles.Card} key={card.id}>
                    <div className={styles.ImageWrapper}>
                        <Image src={card.image} alt={card.title} width={imageSize.width} height={imageSize.height} className={styles.Image} />
                        {(device === "tablet" || device === "mobile") && (
                            <Link href={card.linkSource} className={styles.TitleWrapper}>
                                <h2 className={styles.Title}>{card.title}</h2>
                                <div className={styles.Btn}>
                                    <ArrowRightCircle />
                                </div>
                            </Link>
                        )}
                    </div>
                    <div className={styles.ContentWrapper}>
                        {device !== "tablet" && device !== "mobile" && (
                            <Link href={card.linkSource} className={styles.TitleWrapper}>
                                <h2 className={styles.Title}>{card.title}</h2>
                                <div className={styles.Btn}>
                                    <ArrowRightCircle />
                                </div>
                            </Link>
                        )}
                        {card.description && (
                            <p className={styles.Description}>{card.description}</p>
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
                        
                    </div>
                </div>
                ))}
            </div>
            <div className='mt-20 flex justify-center items-center gap-5'>
                    <Link href="tel:+61415426195" className='btn primary'>
                        <span>+61 415 426 195</span>
                    </Link>
                    <Link href="/contact-us" className='btn'>
                        <span>Get a Quote</span>
                    </Link>
                </div>
        </ContainerFluid>   
    </Section>
  );

};
