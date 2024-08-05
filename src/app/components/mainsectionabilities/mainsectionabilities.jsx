"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./mainsectionabilities.module.scss";

export default function MainSectionAbilities() {
    const [abilities, setAbilities] = useState([
        {
            name: "HTML",
            Image: "/mainsectionabilities/htmlicon.svg"
        },
        {
            name: "CSS",
            Image: "/mainsectionabilities/css3icon.svg"
        },
        {
            name: "JavaScript",
            Image: "/mainsectionabilities/javascirpticon.svg"
        },
        {
            name: "React",
            Image: "/mainsectionabilities/reackticon.svg"
        },
        {
            name: "Node.js",
            Image: "/mainsectionabilities/nodejsicon.svg"
        },
        {
            name: "Next.js",
            Image: "/mainsectionabilities/nextjsicon.svg"
        },
        {
            name: "Sass",
            Image: "/mainsectionabilities/sassicon.svg"
        },
        {
            name: "GitHub",
            Image: "/mainsectionabilities/githubicon.svg"
        },
        {
            name: "Strapi",
            Image: "/mainsectionabilities/strapiicon.svg"
        },
        {
            name: "Figma",
            Image: "/mainsectionabilities/figmaicon.svg"
        },
        {
            name: "SQL",
            Image: "/mainsectionabilities/sqlicon.svg"
        },
        {
            name: "PHP",
            Image: "/mainsectionabilities/phpicon.svg"
        },
    ]);

    return (
        <section className={styles.abilities}>
            <h2 className={styles.abilitiesH2}>Kullanılan Teknolojiler</h2>
            <div className={styles.abilitiesDescription}>
                {abilities.map((ability) => (
                    <div className={styles.ability} key={ability.name}>
                        <Image 
                            src={ability.Image} 
                            alt={ability.name} 
                            width={50} 
                            height={50} 
                        />
                        <p className={styles.abilitiesName}>{ability.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
