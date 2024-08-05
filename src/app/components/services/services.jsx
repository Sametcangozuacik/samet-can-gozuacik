"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./services.module.scss";

export default function Services() {
  const [services, setServices] = useState([
    {
      name: "Web Sitesi Tasarımı",
      description: "Kurumsal kimliğinize uygun, kullanıcı dostu ve mobil uyumlu web siteleri tasarlıyoruz.",
      Image: "/services/webdesigningicon.svg"
    },
    {
      name: "Web Sitesi Geliştirme",
      description: "Güçlü ve hızlı web siteleri geliştirerek, markanızın dijital dünyadaki varlığını güçlendiriyoruz.",
      Image: "/services/webicon.svg"
    },
    {
      name: "E-Ticaret Sitesi",
      description: "Gelişmiş e-ticaret altyapımızla, müşterilerinize sorunsuz alışveriş deneyimi sunuyoruz.",
      Image: "/services/ecommerceicon.svg"
    },
    {
      name: "SEO ve Dijital Pazarlama",
      description: "Arama motorlarında üst sıralarda yer almanızı sağlayarak, hedef kitlenize ulaşmanızı kolaylaştırıyoruz.",
      Image: "/services/seoicon.svg"
    },
    {
      name: "Grafik Tasarım",
      description: "Markanızı yansıtan, dikkat çekici ve özgün grafik tasarımlar oluşturuyoruz.",
      Image: "/services/graphicicon.svg"
    },
    {
      name: "Yazılım ve Mobil Uygulama",
      description: "İhtiyacınıza uygun, kullanıcı dostu ve güvenli yazılım ve mobil uygulamalar geliştiriyoruz.",
      Image: "/services/mobileapplicationicon.svg"
    }
  ]);

  return (
    <div className={styles.services}>
      <h1 className={styles.servicesH1}>Hizmetler</h1>
      <p className={styles.servicesP}>Kurumsal ilkelerimiz ve engin tecrübemizle web sitesi karmaşasına son veriyoruz. Güçlü ve yapay zeka destekli yazılım altyapımızı kullanarak, kapsamlı paketler ve özel web siteleri sunuyoruz.</p>
      <div className={styles.servicesContainer}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceBox}>
            <Image src={service.Image} alt={service.name} width={100} height={100} />
            <h2 className={styles.serviceH2}>{service.name}</h2>
            <p className={styles.serviceP}>{service.description}</p>
          </div>
        ))}
      </div> 
    </div> 
  );
}
