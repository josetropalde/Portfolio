import Head from "next/head";
import Header from "../src/components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Meu Portófolio</title>
        <meta name="description" content="Conheça meu trabalho" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>Testando</h1>
      </main>
    </div>
  );
}
