import "./styles.css";
import { showAbout } from "./about";
import { showHome } from "./home";
import { showMenu } from "./menu";
console.log("Testing if JS works.");

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

const content = document.getElementById("content");
function clearContent() {
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
}

homeButton.addEventListener("click", () => {
    clearContent();
    showHome();
});

menuButton.addEventListener("click", () => {
    clearContent();
    showMenu();
});

aboutButton.addEventListener("click", () => {
    clearContent();
    showAbout();
});

showHome();