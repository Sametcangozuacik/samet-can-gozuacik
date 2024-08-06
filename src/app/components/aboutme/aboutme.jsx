import React from "react";
import styles from "./aboutme.module.scss";
import Image from "next/image";
import aboutMeImage from "../../../../public/aboutme/sametcansettings.jpg";

export default function AboutMe() {
    return (
        <div className={styles.aboutMeBox}>
            <div className={styles.aboutMeTextBox}>
                <h4 className={styles.aboutMeTextH4}>Merhaba, Ben</h4>
                <h1 className={styles.aboutMeTextH1}>Samet Can Gözüaçık</h1>
                <p className={styles.aboutMeTextP}>
                    2019 yılında Gazi Üniversitesi Matematik Bölümü&apos;nde eğitimime başladım. Küçük yaştan itibaren bilgisayarlara karşı büyük bir ilgi ve yetenek geliştirdim ve bu tutkum beni yazılım alanında kariyer yapma yönünde motive etti. Şu anda JavaScript üzerinde çalışıyor ve bu alandaki gelişmeleri yakından takip ediyorum. Hedefim, profesyonel hayatımda Front End Web Developer olarak başarılı bir kariyer inşa etmek.
                    Yeni teknolojilere ve çözümlere hızlı adapte olabilme kabiliyetim, yazılım dünyasında başarılı olmama büyük katkı sağlıyor. Ekip arkadaşlarımla güçlü ve etkili iletişim kurabilmem, projelerin başarılı bir şekilde tamamlanmasına olanak tanıyor. İşimi isteyerek ve özenle yapıyorum, bu da projelerimin kalitesini artırıyor.
                    İnsanlara yardım etme ve ortak bir hedefe ulaşmak için işlevler arası ekiplerle çalışma konusunda büyük bir tutkum var. Bu tutku, projelerdeki rolümü ve sorumluluklarımı en iyi şekilde yerine getirmemi sağlıyor. Ayrıca, verimliliği artırmak amacıyla birden fazla projede aktif olarak yer almayı ve süreçleri standartlaştırmayı seviyorum. Bu sayede, hem kendimi sürekli geliştiriyor hem de ekip arkadaşlarıma katkı sağlıyorum.
                    Matematik bölümünde edindiğim analitik düşünme ve problem çözme becerileri, yazılım projelerinde karşılaştığım zorlukları aşmamda bana büyük avantaj sağlıyor. Bu beceriler, projelerimde yenilikçi ve etkili çözümler üretmemi mümkün kılıyor. Organizasyon ve planlama konusundaki yetkinliğim, projelerin zamanında ve istenilen kalite standartlarında tamamlanmasını sağlıyor.
                    Sonuç olarak, yazılım dünyasında kendimi sürekli geliştirmek, yeni teknolojileri öğrenmek ve uygulamak, ekip arkadaşlarımla uyum içinde çalışarak başarılı projelere imza atmak benim en büyük hedefim. Bu yolculukta öğrendiklerimi ve deneyimlerimi paylaşmak, birlikte daha büyük başarılara ulaşmak için sabırsızlanıyorum.
                </p>
            </div>
            <Image
                className={styles.aboutMeImage}
                src={aboutMeImage}
                width={450}
                alt="Samet Can Gözüaçık"
            />
        </div>
    );
}
