import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";
import "./styles.css";

const header = document.querySelector("header");
const restaurantName = document.createElement("div");
restaurantName.textContent = "PIZZERIA GIUSEPPE";

header.appendChild(restaurantName);

// Select buttons
const buttonHome = document.querySelector(".btn-1");  
const buttonMenu = document.querySelector(".btn-2");
const buttonContact = document.querySelector(".btn-3");

// Content container
const content = document.getElementById("content");

function clearContent() {
    content.innerHTML = "";
}

loadHome();

// Add event listeners
buttonHome.addEventListener("click", () => {
    clearContent();
    loadHome();
});

buttonMenu.addEventListener("click", () => {
    clearContent();
    loadMenu();
});

buttonContact.addEventListener("click", () => {
    clearContent();
    loadContact();
});
