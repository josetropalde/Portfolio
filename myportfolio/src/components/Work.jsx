import styles from "../../styles/Work.module.css";
import WorkItem from "./WorkItem";

export default function Work() {
  const workData = [
    {
      image: "/ogimage.png",
      title: "Meu Portfólio",
      description: "É aqui que eu mostro alguns dos meus trabalhos",
      tech: [{ name: "NextJS" }, { name: "ReactJS" }, { name: "Tailwind" }],
      nork: false,
      url: "https://www.josehenrique.net/portfolio",
      explore: false,
    },
    {
      image: "/project/mybills.png",
      title: "myBills",
      description:
        "Aplicativo mobile para nunca mais esquecer de pagar um boleto",
      tech: [
        { name: "ReactJS" },
        { name: "React Native" },
        { name: "Firebase" },
      ],
      nork: false,
      url: "#",
      explore: false,
    },
    {
      image: "/project/w8.png",
      title: "W8 Imobiliária",
      description:
        "A W8 é a principal imobilária de São Paulo para praias do Litoral Norte",
      tech: [{ name: "Laravel" }, { name: "Blade" }, { name: "PHP" }],
      nork: true,
      url: "https://w8imobiliaria.com.br/",
      explore: true,
    },
    {
      image: "/project/util.png",
      title: "Útilfornos",
      description: "Uma solução E-commerce para venda de fornos industriais",
      tech: [{ name: "HTML/Sass" }, { name: "E-commerce" }, { name: "JS" }],
      nork: true,
      url: "https://util.ind.br/",
      explore: true,
    },
    {
      image: "/project/wecivil.png",
      title: "WE Cívil",
      description: "Engenharia e construção personalizadas",
      tech: [{ name: "HTML/Sass" }, { name: "Wordpress" }, { name: "JS" }],
      nork: true,
      url: "https://wecivil.com.br/",
      explore: true,
    },

    {
      image: "/project/primos.png",
      title: "Primos",
      description: "Desentupidora 24h com diversos serviços",
      tech: [{ name: "HTML/Sass" }, { name: "Wordpress" }, { name: "JS" }],
      nork: true,
      url: "https://primosdesentupidora.com.br/",
      explore: true,
    },
    {
      image: "/project/delphos.png",
      title: "Delphos",
      description: "Desde 1989 prestando serviços administrativos",
      tech: [{ name: "HTML/Sass" }, { name: "Wordpress" }, { name: "JS" }],
      nork: true,
      url: "https://delphoscontabilidade.com.br/",
      explore: true,
    },
    {
      image: "/project/marcogloria.png",
      title: "Marco Glória",
      description: "Serviços de elétrica e automação há mais de 10 anos",
      tech: [{ name: "HTML/Sass" }, { name: "Wordpress" }, { name: "JS" }],
      nork: true,
      url: "https://marcogloria.com.br/",
      explore: true,
    },
    {
      image: "/project/hidraulicaemilio.png",
      title: "Hidráulica Emílio",
      description: "Há 65 resolvendo problemas hidráulicos",
      tech: [{ name: "HTML/Sass" }, { name: "Wordpress" }, { name: "JS" }],
      nork: true,
      url: "https://hidraulicaemilio.com.br/",
      explore: true,
    },
    {
      image: "/project/etiqueta.png",
      title: "CredFashion",
      description: "Moda feminina e masculina",
      tech: [{ name: "Angular" }, { name: "Typescript" }, { name: "Ionic" }],
      nork: true,
      url: "https://etiquetamodas.com.br/",
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
              key={item.title}
              explore={item.explore}
            />
          );
        })}
      </div>
    </div>
  );
}
