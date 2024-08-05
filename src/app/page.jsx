import React from "react";
import MainSection from "./components/mainsection/mainsection";
import MainLogo from "./components/mainlogo/mainlogo";
import MainSectionAbilities from "./components/mainsectionabilities/mainsectionabilities";
import styles from "./page.module.scss";


export default function Home() {
  return (
    <main className={styles.page}>
      <MainSection />
      <MainLogo />
      < MainSectionAbilities />
    </main>
  );
}
