import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.scss";
import logo from '../../../../public/header/sametsitelogo.png';
import whatsapp from '../../../../public/footer/whatsappicon.svg';
import linkedin from '../../../../public/footer/linkedinicon.svg';
import github from '../../../../public/footer/githubicon.svg';
import phone from '../../../../public/footer/phoneicon.svg';
import location from '../../../../public/footer/locationicon.svg';
import mail from '../../../../public/footer/mailicon.svg';


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerbox}>
                <div className={styles.footerInfo}>
                    <Image src={logo} width={160} height={160} alt="Site Logo" />
                    <p className={styles.footerInfoP}>Web Tasarım ihtiyaçlarınız için doğru adres !</p>
                    <div className={styles.footercontact}>
                        <a className={styles.footerContactLink} href="https://wa.me/+905073195505?text=<mesaj>" target="_blank"><Image src={whatsapp} width={20} height={20} /></a>
                        <a className={styles.footerContactLink} href="https://www.linkedin.com/in/samet-can-gozuacik/" target="_blank"><Image src={linkedin} width={20} height={20} /></a>
                        <a className={styles.footerContactLink} href="https://github.com/Sametcangozuacik" target="_blank"><Image src={github} width={20} height={20} /></a>
                    </div>
                </div>
                <div className={styles.footersServicesBox}>
                    <h3 className={styles.footerh3}>Hızlı Linkler</h3>
                    <ul className={styles.footerlinkbox}>
                        <li><Link className={styles.footerlink} href="/"># Anasayfa</Link></li>
                        <li><Link className={styles.footerlink} href="/about"># Hakkımda</Link></li>
                        <li><Link className={styles.footerlink} href="/services"># Hizmetler</Link></li>
                        <li><Link className={styles.footerlink} href="/contact"># İletişim</Link></li>
                    </ul>
                </div>
                <div className={styles.footerContactBox}>
                    <h3 className={styles.footerh3}>İletişim</h3>
                    <div className={styles.footerPhoneBox}>
                        <Image src={phone} width={50} height={50} />
                        <p className={styles.footerPhoneBoxP} >+90 507 319 5505</p>
                    </div>
                    <div className={styles.footerPhoneBox}>
                        <Image src={location} width={50} height={50} />
                        <p className={styles.footerPhoneBoxP} >Ankara / Türkiye</p>
                    </div>
                    <div className={styles.footerPhoneBox}>
                        <Image src={mail} width={50} height={50} />
                        <p className={styles.footerPhoneBoxP} >sametcanngozuacik@gmail.com</p>
                    </div>
                </div>
            </div>
            <div>
                <p className={styles.footerp}>© 2024 Samet Can Gözüaçık Tüm hakları saklıdır</p>
            </div>
        </footer>
    );
}

