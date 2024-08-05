import React from "react";
import Image from "next/image";
import styles from "./mainlogo.module.scss";
import whatsapp from "../../../../public/mainlogo/whatsapptextlogo.svg"
import linkedin from "../../../../public/mainlogo/linkedinlogo.png"
import github from "../../../../public/mainlogo/githublogo.png"

export default function MainLogo() {
    return (
        <section className={styles.mainlogo}>
            <a className={styles.mainLogoLink} href="https://wa.me/+905073195505?text=<mesaj>" target="_blank"><Image src={whatsapp} width={130} height={40} /></a>
            <a className={styles.mainLogoLink} href="https://www.linkedin.com/in/samet-can-gözüaçık-1a2b3c4d5" target="_blank"><Image src={linkedin} width={130} height={40} /></a>
            <a className={styles.mainLogoLink} href="https://github.com/Sametcangozuacik" target="_blank"><Image src={github} width={130} height={40} /></a>
        </section>
    );
}