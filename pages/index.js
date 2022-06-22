import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Abhiram - Welcome!</title>
        <meta
          name="description"
          content="Portfolio website of Abhiram Satpute - Software Engineer, Data Scientist, Full Stack Dev!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Link href="/about">
        <a>About Section</a>
      </Link>
    </div>
  );
}
