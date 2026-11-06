import { createGreeting, appName } from "./modules/greeting.js";
import createCounter from "./modules/counter.js";

const app = document.querySelector("#app");

const counter = createCounter();

app.innerHTML = `
  <div class="container">
    <h1>${appName}</h1>
    <p>${createGreeting("Parcel")}</p>

    <div class="counter">
      <button id="decrement">−</button>
      <span id="value">0</span>
      <button id="increment">+</button>
    </div>
  </div>
`;

const valueElement = document.querySelector("#value");
const incrementButton = document.querySelector("#increment");
const decrementButton = document.querySelector("#decrement");

incrementButton.addEventListener("click", () => {
  valueElement.textContent = counter.increment();
});

decrementButton.addEventListener("click", () => {
  valueElement.textContent = counter.decrement();
});