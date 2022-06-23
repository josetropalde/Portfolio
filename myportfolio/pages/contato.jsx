import Head from "next/head";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";

export default function contato() {
  return (
    <div>
      <Head>
        <title>Contato | Pode me chamar</title>
        <meta name="description" content="Conheça meu trabalho" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>contato</h1>
      </main>

      <Footer />
    </div>
  );
}
