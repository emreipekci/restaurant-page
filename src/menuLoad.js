import pizzasImage from "./images/pizzas.jpg";

export function loadMenu() {
    const contentDiv = document.getElementById("content");

    const img = document.createElement("img");
    img.src = pizzasImage;
    img.alt = "wooden-table-with-pizzas-snacks-it";
    img.width = "60"; // Sets the width as 60% (converted to percentage via CSS if needed)
    img.style.width = "60%"; // Sets the width as full object like.

    const heading = document.createElement("h1");
    heading.textContent = "Menu";

    const list = document.createElement("ul");

    const items = ["Margherita", "Pepperoni", "Capricciosa", "Bufala"];
    items.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        list.appendChild(listItem);
      });

    
    contentDiv.appendChild(img);
    contentDiv.appendChild(heading);
    contentDiv.appendChild(list);

}