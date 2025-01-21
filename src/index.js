import { loadPage } from "./pageLoad.js";
import { loadMenu } from "./menuLoad.js";
import { loadAbout } from "./aboutLoad.js";
import "./styles.css";

// Select buttons
const buttonHome = document.querySelector(".btn-1");  
const buttonMenu = document.querySelector(".btn-2");
const buttonAbout = document.querySelector(".btn-3");

// Content container
const content = document.getElementById("content");

function clearContent() {
    content.innerHTML = "";
}

loadPage();

// Add event listeners
buttonHome.addEventListener("click", () => {
    clearContent();
    loadPage();
});

buttonMenu.addEventListener("click", () => {
    clearContent();
    loadMenu();
});

buttonAbout.addEventListener("click", () => {
    clearContent();
    loadAbout();
})
