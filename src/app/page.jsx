import React from "react";
import MainSection from "./components/mainsection/mainsection";
import MainLogo from "./components/mainlogo/mainlogo";
import styles from "./page.module.scss";


export default function Home() {
  return (
    <main className={styles.page}>
      <MainSection />
      <MainLogo />
    </main>
  );
}
