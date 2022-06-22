import styles from "../../styles/Work.module.css";
import WorkItem from "./WorkItem";

export default function Work() {
  const workData = [
    {
      image: "https://via.placeholder.com/400x400",
      title: "Projeto 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      tech: [{ name: "html" }, { name: "sass" }, { name: "javascript" }],
      url: "#",
    },
    {
      image: "https://via.placeholder.com/400x400",
      title: "Projeto 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      tech: [{ name: "html" }, { name: "sass" }, { name: "javascript" }],
      url: "#",
    },
    {
      image: "https://via.placeholder.com/400x400",
      title: "Projeto 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      tech: [{ name: "html" }, { name: "sass" }, { name: "javascript" }],
      url: "#",
    },
    {
      image: "https://via.placeholder.com/400x400",
      title: "Projeto 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      tech: [{ name: "html" }, { name: "sass" }, { name: "javascript" }],
      url: "#",
    },
    {
      image: "https://via.placeholder.com/400x400",
      title: "Projeto 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      tech: [{ name: "html" }, { name: "sass" }, { name: "javascript" }],
      url: "#",
    },
  ];

  return (
    <div>
      <div className={styles.portfolio}>
        {workData.map((item) => {
          return (
            <WorkItem
              image={item.image}
              title={item.title}
              description={item.description}
              tech={item.tech}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}
