import styles from "../../styles/Main.module.css";

export default function Main() {
  return (
    <section className={styles.main}>
      <div className={styles.main__content}>
        <h1>
          Meu nome é José Henrique, <br />e eu sou Desenvolvedor Web
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Fugiat facere
          officiis magnam veritatis, ipsam reiciendis.
        </p>
      </div>
      <div className={styles.main__background}>Bem-vindo</div>
    </section>
  );
}
