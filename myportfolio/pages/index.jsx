import Head from "next/head";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Main from "../src/components/Main";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Quem sou eu</title>
        <meta name="description" content="Conheça meu trabalho" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Main />
      </main>

      <Footer />
    </div>
  );
}