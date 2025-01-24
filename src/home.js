
import { addFooter } from "./footer.js";

function loadHome() {

    const page1Container = document.createElement("div");
    page1Container.className = "page1-container";

    const page1Text = document.createElement("div");
    page1Text.className = "page1-text";

    const page1Heading = document.createElement("h1");
    page1Heading.className = "page1-heading"
    page1Heading.textContent = "Welcome to Pizzeria Giuseppe";

    const page1Paragraph = document.createElement("p");
    page1Paragraph.className = "page1-paragraph"
    page1Paragraph.innerHTML = "The tastiest pizzas in Leiden. We craft every pizza with love, using only the freshest ingredients and traditional recipes passed down through generations. Relax in our cozy atmosphere or order your favorites to enjoy at home.<br> Buon appetito!";

    // Append all elements to the div
    
    document.querySelector("#content").appendChild(page1Container);
    page1Container.appendChild(page1Text);
    page1Text.appendChild(page1Heading);
    page1Text.appendChild(page1Paragraph);

    addFooter();
}

export { loadHome };