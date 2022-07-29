import styles from "../../styles/WorkItem.module.css";

export default function WorkItem(props) {
  const { image, title, description, tech, url, nork, explore } = props;

  const exploreTrue = explore.explore ? "inline-block" : "none";
  const androidTrue = explore.android ? "inline-block" : "none";
  const iosTrue = explore.ios ? "inline-block" : "none";
  const norkTrue = nork ? "Desenvolvido em conjunto com a equipe NorkTech" : "";
  return (
    <div>
      <div className={styles.portfolio__item}>
        <img src={image} alt />

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
            <div className={styles.portfolio__nav}>
              <a
                href={url.exploreUrl}
                style={{ display: exploreTrue }}
                rel="noreferrer"
                target="_blank"
                className="bg-red-600"
              >
                Conheça
              </a>

              <a
                href={url.androidUrl}
                rel="noreferrer"
                target="_blank"
                className="bg-[#3ddc84]"
                style={{ display: androidTrue }}
              >
                <img src="/android-brands.png" alt />
                Android
              </a>
              <a
                href={url.iosUrl}
                rel="noreferrer"
                target="_blank"
                className="bg-[#089cf5]"
                style={{ display: iosTrue }}
              >
                <img src="/apple-brands.png" alt />
                iOS
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
