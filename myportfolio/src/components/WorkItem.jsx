import styles from "../../styles/WorkItem.module.css";

export default function WorkItem(props) {
  const { image, title, description, tech, url, nork, explore } = props;
  console.log(explore);
  const exploreTrue = explore ? "inline-block" : "none";

  const norkTrue = nork
    ? "Desenvolvido em conjunto com a equipe Nork Digital"
    : "";

  return (
    <div>
      <div className={styles.portfolio__item}>
        <img src={image} alt={title} />

        <div className={styles.portfolio__text}>
          <div>
            <h2>{title}</h2>
            <p>
              {description}
              <br />
              <strong>{norkTrue}</strong>
            </p>
            <div className={styles.portfolio__technology}>
              <ul>
                {tech.map((item, index) => {
                  return <li key={index}>{item.name}</li>;
                })}
              </ul>
            </div>
            <a
              href={url}
              style={{ display: exploreTrue }}
              rel="noreferrer"
              target="_blank"
            >
              Conheça
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
