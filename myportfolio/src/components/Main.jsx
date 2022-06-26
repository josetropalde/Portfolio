import styles from "../../styles/Main.module.css";
import Link from "next/link";

export default function Main() {
  return (
    <section className={styles.main}>
      <div className={styles.main__content}>
        <h1 data-text="Desenvolvedor Web Desenvolvedor Web ">
          <span>
            Meu <br />
            nome é <br />
            José Henrique
          </span>
        </h1>
        <p>
          Desenvolvedor Web, Mobile e UI/UX Designer, viciado em codar e
          resolver problemas de forma eficiente e tecnológica
          <b>(nada de gambiarra)</b> desde 2021
        </p>
        <p>
          Aqui você pode conferir <Link href="/portfolio">o meu trabalho</Link>{" "}
          e se gostar e precisar de alguma solução tecnológica,{" "}
          <Link href="/contato">entre em contato</Link>
        </p>
      </div>
    </section>
  );
}
