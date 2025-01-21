import pizzeriaImage from "./images/pizzeria.jpg";

export function loadPage() {
    const contentDiv = document.getElementById("content");
    
    const img = document.createElement("img");
    img.src = pizzeriaImage;
    img.alt = "local pizzeria waiter carrying pizza";
    img.width = "60"; // Sets the width as 60% (converted to percentage via CSS if needed)
    img.style.width = "60%"; // Sets the width as full object like.

    const heading = document.createElement("h1");
    heading.textContent = "Pizzeria Giuseppe";

    const paragraph = document.createElement("p");
    paragraph.textContent = "The tastiest pizzas Leiden";

    // Append all elements to the div
    contentDiv.appendChild(img);
    contentDiv.appendChild(heading);
    contentDiv.appendChild(paragraph);
}