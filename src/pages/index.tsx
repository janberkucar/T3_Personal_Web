import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { prisma } from "../db/client";
import TestData from "../utils/types/TestData";
import { trpc } from "../utils/types/trpc";

const Index: React.FC<{ props: TestData[] }> = (props) => {
  const { data, isLoading } = trpc.useQuery(["hi"]);
  if (isLoading || !data) return <div>Loading...</div>;
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

          <h1 className="w-2/5 text-start text-4xl text-bold">
            Ustad Yazilim Test
          </h1>
        </div>
        <div className="test-data-container">
          <h3>{props.test}</h3>
          <h3>{data.greeting}</h3>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const testData = await prisma.test.findMany();
  return {
    props: {
      test: JSON.stringify(testData),
    },
  };
};

export default Index;
