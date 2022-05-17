window.addEventListener("load", () => {
  new Glider(document.querySelector(".itens-1-home"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: false,
    arrows: false,
    dots: ".dots-secao1-home",
    arrows: {
      prev: ".glider-prev-secao1-home",
      next: ".glider-next-secao1-home",
    },
    responsive: [
      {
        breakpoint: 775,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          duration: 0.25,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          duration: 0.25,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          duration: 0.25,
        },
      },
    ],
  });
});
