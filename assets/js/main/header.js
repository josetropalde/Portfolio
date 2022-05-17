//Menu
const btnResponsiveMenu = document.querySelector(".responsive-menu");

function activeMenu() {
  const header = document.querySelector(".section-header");
  header.classList.toggle("responsive-menu-active");
}
btnResponsiveMenu.addEventListener("click", activeMenu);
