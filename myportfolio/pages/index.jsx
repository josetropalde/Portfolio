import Head from "next/head";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Main from "../src/components/Main";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div>
      <Head>
        <meta name="description" content="Conheça meu trabalho" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Sou desenvolvedor Front-end e aqui apresento alguns projetos que fizeram parte da minha carreira"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.josehenrique.net/" />
        <meta property="og:title" content="Meu nome é José Henrique" />
        <meta
          property="og:description"
          content="Sou desenvolvedor Front-end e aqui apresento alguns projetos que fizeram parte da minha carreira"
        />
        <meta property="og:image" content="/public/ogimage.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.josehenrique.net/" />
        <meta property="twitter:title" content="Meu nome é José Henrique" />
        <meta
          property="twitter:description"
          content="Sou desenvolvedor Front-end e aqui apresento alguns projetos que fizeram parte da minha carreira"
        />
        <meta property="twitter:image" content="/public/ogimage.png" />
        <meta
          property="og:description"
          content="Sou desenvolvedor Front-end e aqui apresento alguns projetos que fizeram parte da minha carreira"
        />
        <title>Home | Quem sou eu</title>
      </Head>

      <Header />

      <main>
        <Main />
      </main>

      <Footer welcome={true}/>
    </div>
  );
}
