import styles from "../../styles/WorkItem.module.css";

export default function WorkItem(props) {
  const { image, title, description, tech, url } = props;
  return (
    <div>
      <div className={styles.portfolio__item}>
        <img src={image} alt={title} />
        <div className={styles.portfolio__text}>
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className={styles.portfolio__technology}>
              <ul>
                {tech.map((item) => {
                  return <li>{item.name}</li>;
                })}
              </ul>
            </div>
            <a href={url}>Saiba mais</a>
          </div>
        </div>
      </div>
    </div>
  );
}
