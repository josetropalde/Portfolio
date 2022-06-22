import Head from "next/head";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Work from "../src/components/Work";
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
        <Work />
      </main>

      <Footer />
    </div>
  );
}
