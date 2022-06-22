import Head from "next/head";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Portfólio | Meu trabalho</title>
        <meta name="description" content="Conheça meu trabalho" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>portfolio</h1>
      </main>

      <Footer />
    </div>
  );
}
