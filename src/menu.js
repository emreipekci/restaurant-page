import { addFooter } from "./footer.js";

function loadMenu() {

  const page2Container = document.createElement("div");
  page2Container.className = "page2-container";

  const page2Text = document.createElement("div");
  page2Text.className = "page2-text";
  page2Text.textContent = "Whether you're a fan of classic combinations or bold new tastes, there's something for everyone to enjoy. You can find our 4 favourites here.";

  const pizzaOneContainer = document.createElement("div");
  pizzaOneContainer.className = "pizza-container";
  const pizzaOneTitle = document.createElement("p");
  pizzaOneTitle.className = "pizza-title";
  pizzaOneTitle.textContent = "Margherita";
  const pizzaOneIngredients = document.createElement("p");
  pizzaOneIngredients.className = "pizza-ingredients";
  pizzaOneIngredients.textContent = "San Marzano tomato sauce, Mozzarella di bufala, Olive Oil";

  const pizzaTwoContainer = document.createElement("div");
  pizzaTwoContainer.className = "pizza-container";
  const pizzaTwoTitle = document.createElement("p");
  pizzaTwoTitle.className = "pizza-title";
  pizzaTwoTitle.textContent = "Pepperoni";
  const pizzaTwoIngredients = document.createElement("p");
  pizzaTwoIngredients.className = "pizza-ingredients";
  pizzaTwoIngredients.textContent = "Tomato sauce, Mozzarella, Chili peppers";

  const pizzaThreeContainer = document.createElement("div");
  pizzaThreeContainer.className = "pizza-container";
  const pizzaThreeTitle = document.createElement("p");
  pizzaThreeTitle.className = "pizza-title";
  pizzaThreeTitle.textContent = "Capricciosa";
  const pizzaThreeIngredients = document.createElement("p");
  pizzaThreeIngredients.className = "pizza-ingredients";
  pizzaThreeIngredients.textContent = "Tomato sauce, Mozzarella, Mushrooms, Artichokes, Cooked ham, Olives, Olive oil";

  const pizzaFourContainer = document.createElement("div");
  pizzaFourContainer.className = "pizza-container";
  const pizzaFourTitle = document.createElement("p");
  pizzaFourTitle.className = "pizza-title";
  pizzaFourTitle.textContent = "Napoletana";
  const pizzaFourIngredients = document.createElement("p");
  pizzaFourIngredients.className = "pizza-ingredients";
  pizzaFourIngredients.textContent = "Tomato sauce, Mozzarella, Anchovies and Olive oil";


  document.querySelector("#content").appendChild(page2Container);
  page2Container.append(page2Text, pizzaOneContainer, pizzaTwoContainer, pizzaThreeContainer, pizzaFourContainer);

  pizzaOneContainer.append(pizzaOneTitle, pizzaOneIngredients);
  pizzaTwoContainer.append(pizzaTwoTitle, pizzaTwoIngredients);
  pizzaThreeContainer.append(pizzaThreeTitle, pizzaThreeIngredients);
  pizzaFourContainer.append(pizzaFourTitle, pizzaFourIngredients);

  addFooter();
}

export { loadMenu };