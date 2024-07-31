import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import the Link component
import styles from './header.module.scss';
import logo from '../../../../public/header/sametsitelogo.png';

export default function Header() {
    return (
        <header className={styles.header}>
            <Image src={logo} width={200} height={200} alt="Site Logo" />
            <ul className={styles.link}>
                <li><Link className={styles.headerlink} href="/">Anasayfa</Link></li>
                <li><Link className={styles.headerlink} href="/about">Hakkımda</Link></li>
                <li><Link className={styles.headerlink} href="/services">Hizmetler</Link></li>
                <li><Link className={styles.headerlink} href="/contact">İletişim</Link></li>
            </ul>
        </header>
    );
}