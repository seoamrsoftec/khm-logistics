"use client";
import styles from './Header.module.css';
import { useState, useEffect } from "react";
import {  usePathname } from "next/navigation";
import Link from "next/link";
import useSticky from '@/components/hooks/use-sticky';
import { FiPlus } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import Button from '@/components/ui/BtnBorder';
import Logo from '@/components/svg/Logo';
import LogoWhite from '@/components/svg/LogoWhite';
import Btn from '@/components/ui/BtnBorder';
import Image from 'next/image';

export default function Header() {
  const { sticky } = useSticky();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

const Navigation = [
    { 
      title: 'Home', 
      linkSource:'/',      
    },

    {
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
      title: 'Freight Forwarding',
      linkSource:'/freight-forwarding-sydney' 
    },
    { 
      title: 'Customs Clearance', 
      linkSource:'/customs-clearance-sydney' 
    }
  ]; 

  return (
    <>
    <header className={`${styles.headerContainer} ${sticky ? styles.headerSticky : ""}`}>
            <div className={styles.navbar}>
                <div className={styles.navbarLogo}>
                    <Link href="/" title="Container Transport Companies Sydney" className="text-black ">
                       <Image src="/images/logo/khm-logo.png" alt="Container Transport Companies Sydney" width={1135} height={458}  priority className='w-[200px] h-auto'  />
                    </Link>
                </div>
                <div className='hidden xl:flex'>
                    <ul className={styles.Navigation}>
                        {Navigation.map((Menu, list) => (
                            <li className={styles.NavigationLi} key={list}>
                                <Link alt="" href={Menu.linkSource} className={styles.NavigationLink}>{Menu.title}</Link>
                                {Menu.items && Menu.items.length > 0 && (
                                    <ul className={styles.SubNav}>
                                        {Menu.items.map((item, index) => (
                                            <li key={index} className={styles.SubNavItem}>
                                                <Link href={item.href} className={styles.SubNavItemLink}>
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                        <li className={styles.NavigationLi}>
                            <Link href="/contact-us" className='btn'>
                                <span>Get a Quote</span>
                            </Link>
                        </li>
                    </ul>
                </div>
               <button className={`${styles.MobileMenuBtn} block xl:hidden`} onClick={() => setIsMenuOpen(true)}>
                    <span className={styles.MobileMenuBox}>
						<span className={`${styles.Hamburger} ${styles.one}`}></span>
						<span className={`${styles.Hamburger} ${styles.two}`}></span>
						<span className={`${styles.Hamburger} ${styles.three}`}></span>
					</span>
                </button>
              
            </div>
    </header>
    <div className={`${styles.MobileMenu} ${isMenuOpen ? styles.open : styles.closed}`}>
        <div>
            <div className={`${styles.MobileMenuHeader}`}>
                <div className={styles.navbarLogo}>
                    <Link href="/" title="Container Transport Companies Sydney" className="text-black">
                        <Logo/>
                    </Link>
                </div>
                <div className={styles.MobileMenuClose} onClick={() => setIsMenuOpen(false)}><CgClose/></div>
            </div>
            <ul className={`${styles.MobileNav}`}>
                {Navigation.map((Menu, list) => (
                    <li key={list}>
                        <Link alt="" href={Menu.linkSource}>{Menu.title}</Link>
                        {Menu.items && Menu.items.length > 0 && (
                            <ul>
                                {Menu.items.map((item, index) => (
                                    <li key={index} >
                                        <Link href={item.href} >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
        <div className="flex justify-center gap-4 p-4">
            <Link href="tel:+61415426195" className='btn secondary'>
                <span>+61 415 426 195</span>
            </Link>
            <Link href="/contact-us" className='btn'>
                <span>Get a Quote</span>
            </Link>
        </div>
    </div>
    </>
  );
}
