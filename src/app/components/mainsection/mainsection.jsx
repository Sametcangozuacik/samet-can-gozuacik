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
                <p className={styles.mainSectionPTwo}>Merhaba, ben Ankara&apos;da Freelance Web Developer olarak hizmet veriyorum. Uzmanlık alanlarım başlıca Web Tasarım ve Web Yazılım&apos;dır. HTML5, CSS3, ve JavaScript teknolojileri yanı sıra, modern framework&apos;ler olan Vue.js, React.js, Next.js, ve Quasar&apos;ı kullanarak front-end geliştirme yapmaktayım. Ayrıca, PHP ve MySQL teknolojileri ile back-end programlama konusunda da deneyimliyim.
                    Projelerinizde, kullanıcı dostu, mobil uyumlu ve performansı yüksek web siteleri tasarlayarak markanızın dijital dünyadaki varlığını güçlendirmeyi hedefliyorum.</p>
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
                alt="Samet_Can_Gözüaçık"
            />
        </section>
    );
}
