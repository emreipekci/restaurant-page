import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";
import "./styles.css";

const header = document.querySelector("header");
const restaurantName = document.createElement("div");
restaurantName.textContent = "PIZZERIA GIUSEPPE";

header.appendChild(restaurantName);

// Content container
const content = document.getElementById("content");

function clearContent() {
    content.innerHTML = "";
}

loadHome();

// Add event listeners
window.addEventListener("load", () => {

// Select buttons
    const buttonHome = document.querySelector(".btn-1");  
    const buttonMenu = document.querySelector(".btn-2");
    const buttonContact = document.querySelector(".btn-3");

    const buttons = [buttonHome, buttonMenu, buttonContact];

    buttonHome.classList.add("active"); // Set "Home" as the active button initially

// Add event listeners to buttons
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove 'active' class from all buttons
            buttons.forEach(btn => btn.classList.remove("active"));

            // Add 'active' class to the clicked button
            button.classList.add("active");

            // Call the corresponding content-loading function
            clearContent();
            if (button === buttonHome) loadHome();
            if (button === buttonMenu) loadMenu();
            if (button === buttonContact) loadContact();
        });
    });
});
