import React from "react";
import Image from "next/image";
import styles from "./mainsection.module.scss";
import sametcan from "../../../../public/mainsection/sametcangozuacik.jpg";

export default function MainSection() {
    return (
        <section className={styles.mainsection}>
            <div>
                <div>
                    <h3 className={styles.mainSectionH3}>Merhaba, Ben</h3>
                    <h1 className={styles.mainSectionH1}>Samet Can Gözüaçık</h1>
                </div>
                <p className={styles.mainSectionP}>Yazılım Geliştirici</p>
                <div>
                    <a
                    className={styles.mainSectionCV}
                    href="/mainsection/Samet_Can_Gözüaçık_CV.pdf"
                    download="Samet_Can_Gözüaçık_CV.pdf"
                >
                    Özgeçmişimi İndir
                </a>
                </div>
                
            </div>
            <Image
                className={styles.mainSectionImage}
                src={sametcan}
                width={300}
                height={400}
                alt="Samet Can Gözüaçık"
            />
        </section>
    );
}
