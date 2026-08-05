import "./styles.css";
import loadHomePage from "./home";
import loadMenuPage from "./menu";
import loadAboutPage from "./about";
import loadContactPage from "./contact";

const pages = {
  home: loadHomePage,
  menu: loadMenuPage,
  about: loadAboutPage,
  contact: loadContactPage,
};

function switchTab(tab, button) {
  document.getElementById("content").textContent = "";

  document
    .querySelectorAll("nav button")
    .forEach((navButton) => navButton.classList.remove("active"));
  button.classList.add("active");

  pages[tab]();
}

document.querySelectorAll("nav button").forEach((button) => {
  button.addEventListener("click", () => {
    switchTab(button.dataset.tab, button);
  });
});

loadHomePage();
