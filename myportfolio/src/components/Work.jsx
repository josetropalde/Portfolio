import styles from "../../styles/Work.module.css";
import WorkItem from "./WorkItem";

export default function Work() {
  const workData = [
    {
      image: "/project/util.png",
      title: "Útilfornos",
      description: "Uma solução E-commerce para venda de fornos industriais",
      tech: [
        { name: "html/sass" },
        { name: "e-commerce" },
        { name: "javascript" },
      ],
      nork: true,
      url: "https://util.ind.br/",
      key: 1,
    },
    {
      image: "/project/wecivil.png",
      title: "WE Cívil",
      description: "Engenharia e construção personalizadas",
      tech: [
        { name: "html/css" },
        { name: "wordpress" },
        { name: "javascript" },
      ],
      nork: true,
      url: "https://wecivil.com.br/",
      key: 2,
    },
    {
      image: "https://via.placeholder.com/400x400",
      title: "myBills",
      description:
        "Aplicativo mobile para nunca mais esquecer de pagar um boleto",
      tech: [{ name: "react" }, { name: "react native" }, { name: "firebase" }],
      nork: false,
      url: "#",
      key: 3,
    },
    {
      image: "/project/primos.png",
      title: "Primos",
      description: "Desentupidora 24h com diversos serviços",
      tech: [
        { name: "html/sass" },
        { name: "wordpress" },
        { name: "javascript" },
      ],
      nork: true,
      url: "https://primosdesentupidora.com.br/",
      key: 4,
    },
    {
      image: "https://via.placeholder.com/400x400",
      title: "Delphos",
      description: "Desde 1989 prestando serviços administrativos",
      tech: [
        { name: "html/sass" },
        { name: "wordpress" },
        { name: "javascript" },
      ],
      nork: true,
      url: "#",
      key: 5,
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
              nork={item.nork}
              url={item.url}
              key={item.key}
            />
          );
        })}
      </div>
    </div>
  );
}
