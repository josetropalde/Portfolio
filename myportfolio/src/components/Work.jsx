import styles from "../../styles/Work.module.css";
import WorkItem from "./WorkItem";

export default function Work() {
  const workData = [
    {
      image: "/ogimage.png",
      title: "Meu Portfólio",
      description: "É aqui que eu mostro alguns dos meus trabalhos",
      tech: [{ name: "Next" }, { name: "React" }, { name: "Tailwind" }],
      nork: false,
      url: "https://www.josehenrique.net/portfolio",
      key: 1,
      explore: false,
    },
    {
      image: "/project/mybills.png",
      title: "myBills",
      description:
        "Aplicativo mobile para nunca mais esquecer de pagar um boleto",
      tech: [{ name: "react" }, { name: "react native" }, { name: "firebase" }],
      nork: false,
      url: "#",
      key: 2,
      explore: true,
    },
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
      key: 3,
      explore: true,
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
      key: 4,
      explore: true,
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
      key: 5,
      explore: true,
    },
    {
      image: "/project/delphos.png",
      title: "Delphos",
      description: "Desde 1989 prestando serviços administrativos",
      tech: [
        { name: "html/sass" },
        { name: "wordpress" },
        { name: "javascript" },
      ],
      nork: true,
      url: "#",
      key: 6,
      explore: true,
    },
    {
      image: "/project/marcogloria.png",
      title: "Marco Glória",
      description: "Serviços de elétrica e automação há mais de 10 anos",
      tech: [
        { name: "html/sass" },
        { name: "wordpress" },
        { name: "javascript" },
      ],
      nork: true,
      url: "https://marcogloria.com.br/",
      key: 7,
      explore: true,
    },
    {
      image: "/project/hidraulicaemilio.png",
      title: "Hidráulica Emílio",
      description: "Há 65 resolvendo problemas hidráulicos",
      tech: [
        { name: "html/sass" },
        { name: "wordpress" },
        { name: "javascript" },
      ],
      nork: true,
      url: "https://hidraulicaemilio.com.br/",
      key: 8,
      explore: true,
    },
    {
      image: "/project/etiqueta.png",
      title: "CredFashion",
      description: "Moda feminina e masculina",
      tech: [{ name: "Angular" }, { name: "Typescript" }, { name: "Ionic" }],
      nork: true,
      url: "https://etiquetamodas.com.br/",
      key: 9,
      explore: true,
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
              explore={item.explore}
            />
          );
        })}
      </div>
    </div>
  );
}
