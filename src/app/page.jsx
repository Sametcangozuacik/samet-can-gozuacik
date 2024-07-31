import React from "react";
import Header from "../app/components/Header/header";
import styles from "./page.module.scss";


export default function Home() {
  return (
    <main className={styles.page}>
      <Header />
    </main>
  );
}
