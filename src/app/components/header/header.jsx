"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.scss';
import moment from 'moment';
import hamburger from '../../../../public/header/hamburgericon.png';
import logo from '../../../../public/header/sametsitelogo.png';
import home from '../../../../public/header/homeicon.svg';
import phone from '../../../../public/header/phoneicon.svg';
import about from '../../../../public/header/abouticon.svg';
import services from '../../../../public/header/servicesicon.svg';

export default function Header() {
    const [time, setTime] = useState(moment().format('ll'));
    const [menuOpen, setMenuOpen] = useState(false);
    const headerRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (headerRef.current && !headerRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <header className={styles.header} ref={headerRef}>
            <Image src={logo} width={200} height={200} alt="Site Logo" />
            <button className={styles.hamburger} onClick={toggleMenu}>
                <Image src={hamburger} width={72} height={72} alt="Menu" />
            </button>
            <ul className={`${styles.link} ${menuOpen ? styles.open : ''}`}>
                <li><Link className={styles.headerlink} href="/"><Image src={home} width={24} height={24} alt="home"/>Anasayfa</Link></li>
                <li><Link className={styles.headerlink} href="/about"><Image src={about} width={24} height={24} alt="home"/>Hakkımda</Link></li>
                <li><Link className={styles.headerlink} href="/services"><Image src={services} width={24} height={24} alt="home"/>Hizmetler</Link></li>
                <li><Link className={styles.headerlink} href="/contact"><Image src={phone} width={24} height={24} alt="home"/>İletişim</Link></li>
            </ul>
            <div className={styles.time}>{time}</div>
        </header>
    );
}
