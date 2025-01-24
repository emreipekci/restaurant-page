import { addFooter } from "./footer.js";

function loadMenu() {

  const page2Container = document.createElement("div");
  page2Container.className = "page2-container";

  const containerText = document.createElement("div");
  containerText.className = "container-text";
  
  const page2Text = document.createElement("div");
  page2Text.className = "page2-text";
  page2Text.textContent = "Whether you're a fan of classic combinations or bold new tastes, there's something for everyone to enjoy ♥";

  const startersContainer = document.createElement("div");
  startersContainer.className = "menu-container";
  const startersTitle = document.createElement("p");
  startersTitle.className = "menu-title";
  startersTitle.textContent = "Starters";
  const startersIngredients = document.createElement("p");
  startersIngredients.className = "menu-ingredients";
  startersIngredients.textContent = "Bruschetta • Caprese • Carpaccio • Focaccia • Marinated olives • Mixed salad";

  const pastaContainer = document.createElement("div");
  pastaContainer.className = "menu-container";
  const pastaTitle = document.createElement("p");
  pastaTitle.className = "menu-title";
  pastaTitle.textContent = "Pasta";
  const pastaIngredients = document.createElement("p");
  pastaIngredients.className = "menu-ingredients";
  pastaIngredients.textContent = "Lasagne • Pasta Carbonara • Pesto Spaghetti • Penne alla arabiata • Tagliatelle with vegetables • Ravioli with ricotta and spinach";

  const pizzaContainer = document.createElement("div");
  pizzaContainer.className = "menu-container";
  const pizzaTitle = document.createElement("p");
  pizzaTitle.className = "menu-title";
  pizzaTitle.textContent = "Pizzas";
  const pizzaIngredients = document.createElement("p");
  pizzaIngredients.className = "menu-ingredients";
  pizzaIngredients.textContent = "Margherita • Pepperoni • Capricciosa • Napoletana • Calzone • Salami • Salmon • Vegeterian";

  const dessertsContainer = document.createElement("div");
  dessertsContainer.className = "menu-container";
  const dessertsTitle = document.createElement("p");
  dessertsTitle.className = "menu-title";
  dessertsTitle.textContent = "Desserts";
  const dessertsIngredients = document.createElement("p");
  dessertsIngredients.className = "menu-ingredients";
  dessertsIngredients.textContent = "Classic tiramisu • Sorbet • Ice cream scoops";

  
  document.querySelector("#content").appendChild(page2Container);
  page2Container.appendChild(containerText);
  containerText.append(page2Text, startersContainer, pastaContainer, pizzaContainer, dessertsContainer);

  startersContainer.append(startersTitle, startersIngredients);
  pastaContainer.append(pastaTitle, pastaIngredients);
  pizzaContainer.append(pizzaTitle, pizzaIngredients);
  dessertsContainer.append(dessertsTitle, dessertsIngredients);

  addFooter();
}

export { loadMenu };