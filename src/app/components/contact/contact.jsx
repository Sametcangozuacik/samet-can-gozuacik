"use client";
import React, { useState } from "react";
import styles from "./contact.module.scss";
import emailjs from '@emailjs/browser';

export default function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');

    function handleNameChange(event) {
        setName(event.target.value);
    }
    
    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handleSubjectChange(event) {
        setSubject(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (name === '' || email === '' || subject === '') {
            alert('Lütfen tüm alanları doldurunuz');
            return;
        } else {
            alert('Gönderildi');
        }

        console.log(name, email, subject);

        const servicesId = "service_d7az98s";
        const templateId = "template_4gios3o";
        const publicKey = "T1AKIjnvOzWEIFhWL";

        const templateParams = {
            name: name,
            email: email,
            subject: subject
        };

        emailjs.send(servicesId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log(response.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className={styles.contactPage}>
            <h2 className={styles.contactPageH2}>İletişim</h2>
            <h3 className={styles.contactPageH3}>Birlikte Kahve İçmeye Ne Dersiniz ?</h3>
            <p className={styles.contactPageP}>Elbette, beraber çalışarak internet dünyasında başarılı olabileceğimize inanıyorum. Herhangi bir konuda iletişim kurabilir, projelerimizle ilgili detayları, deneyimlerimizi, taleplerimizi ve hatta gelecek hayallerimizi paylaşabiliriz. Birlikte çalışma fırsatını değerlendirerek en iyi sonuçları elde etmek için birlikte çaba gösterebiliriz. Size en kısa sürede geri dönüş yapmak için sabırsızlanıyorum.</p>
            <form className={styles.contactPageForm} onSubmit={handleSubmit}>
                <input className={styles.contactPageFormInput} value={name} onChange={handleNameChange} type="text" placeholder="Adınız ve Soyadınız" />
                <input className={styles.contactPageFormInput} value={email} onChange={handleEmailChange} type="email" placeholder="E-posta Adresiniz" />
                <input className={styles.contactPageFormInput} value={subject} onChange={handleSubjectChange} type="text" placeholder="Danışmak İstediğiniz Konu" />
                <button className={styles.contactPageFormInputBtn} type="submit">Gönder</button>
            </form>
        </div>
    );
}
