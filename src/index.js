import "./styles.css";
import { showAbout } from "./about";
import { showHome } from "./home";
import { showMenu } from "./menu";
console.log("Testing if JS works.");

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

homeButton.addEventListener("click", () => {
    showHome();
});

menuButton.addEventListener("click", () => {
    showMenu();
});

aboutButton.addEventListener("click", () => {
    showAbout();
});