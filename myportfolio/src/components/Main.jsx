import styles from "../../styles/Main.module.css";

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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Fugiat facere
          officiis magnam veritatis, ipsam reiciendis.
        </p>
      </div>
    </section>
  );
}
