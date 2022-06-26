import Head from "next/head";
import Footer from "../src/components/Footer";
import Form from "../src/components/Form";
import Header from "../src/components/Header";

export default function Contato() {
  return (
    <div>
      <Head>
        <title>Contato | Pode me chamar</title>
        <meta name="description" content="Me mande uma mensagem" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Form />
      </main>

      <Footer />
    </div>
  );
}
