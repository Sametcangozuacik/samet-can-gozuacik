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
                <p className={styles.mainSectionPTwo}>Merhaba ben Ankara'da, Freelance Web Developer olarak hizmet veriyorum.
                    Verdiğim hizmetler başlıca; Web Tasarım & Web Yazılım alanlarında 
                    HTML5/CSS3/JAVASCRIPT teknolojileri yanı sıra VUE.JS, REACT.JS, NEXT.JS, QUASAR framework'lerini kullanarak front-end kodlama,
                    PHP-MYSQL teknolojilerini kullanarak back-end programlamadır.</p>
                    <div>
                    <a
                        className={styles.mainSectionCV}
                        href="/mainsection/Samet_Can_Gözüaçık_CV.pdf"
                        download="Samet_Can_Gözüaçık_CV.pdf">
                        Özgeçmişimi İndir
                    </a>
                </div> 
            </div>
            <Image
                className={styles.mainSectionImage}
                src={sametcan}
                width={400}
                height={500}
                alt="Samet Can Gözüaçık"
            />
        </section>
    );
}
