import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.scss";
import logo from '../../../../public/header/sametsitelogo.png';
import whatsapp from '../../../../public/footer/whatsappicon.svg';
import linkedin from '../../../../public/footer/linkedinicon.svg';
import github from '../../../../public/footer/githubicon.svg';


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerbox}>
                <Image src={logo} width={200} height={200} alt="Site Logo" />
                <ul className={styles.footerlinkbox}>
                    <li><Link className={styles.footerlink} href="/"># Anasayfa</Link></li>
                    <li><Link className={styles.footerlink} href="/about"># Hakkımda</Link></li>
                    <li><Link className={styles.footerlink} href="/services"># Hizmetler</Link></li>
                    <li><Link className={styles.footerlink} href="/contact"># İletişim</Link></li>
                </ul>
                <div className={styles.footercontact}>
                    <a href="https://wa.me/+905073195505?text=<mesaj>" target="_blank"><Image src={whatsapp} width={30} height={30} /></a>
                    <a href="https://www.linkedin.com/in/samet-can-gozuacik/" target="_blank"><Image src={linkedin} width={30} height={30} /></a>
                    <a href="https://github.com/Sametcangozuacik" target="_blank"><Image src={github} width={30} height={30} /></a>
                </div>
            </div>
            <div>
                <p className={styles.footerp}>© 2024 Samet Can Gözüaçık</p>
            </div>
        </footer>
    );
}

