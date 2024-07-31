import React from "react";
import Header from "../app/components/header/header";
import Footer from "../app/components/footer/footer";
import MainSection from "./components/mainsection/mainsection";
import styles from "./page.module.scss";


export default function Home() {
  return (
    <main className={styles.page}>
      <Header />
      <MainSection />
      <Footer/>
    </main>
  );
}
