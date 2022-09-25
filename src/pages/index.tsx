import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>:ustad-yazilim</title>
      </Head>

      <main className={styles.main}>
        <div className="hero-section w-full flex items-center justify-center">
          <h2 className="w-3/5 text-center text-2xl ">
            From everywhere, easy, fast MTSK Management System
          </h2>

          <h1 className="w-2/5 text-start text-4xl text-bold">Ustad Yazilim</h1>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
