"use strict";function _defineProperty(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}var btnResponsiveMenu=document.querySelector(".responsive-menu");function activeMenu(){document.querySelector(".section-header").classList.toggle("responsive-menu-active")}btnResponsiveMenu.addEventListener("click",activeMenu);var loader=document.querySelector(".loader");window.addEventListener("load",function(){loader.style.display="none"}),window.addEventListener("load",function(){var e;new Glider(document.querySelector(".itens-1-home"),(_defineProperty(e={slidesToShow:1,slidesToScroll:1,scrollLock:!1,arrows:!1,dots:".dots-secao1-home"},"arrows",{prev:".glider-prev-secao1-home",next:".glider-next-secao1-home"}),_defineProperty(e,"responsive",[{breakpoint:775,settings:{slidesToShow:2,slidesToScroll:2,duration:.25}},{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,duration:.25}},{breakpoint:1440,settings:{slidesToShow:5,slidesToScroll:5,duration:.25}}]),e))});