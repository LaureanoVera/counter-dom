import { amountValue } from './form';
let counterValue = 0; // <= Store Counter
const counter = document.getElementById("counter-value"); // select container of value
const handleCounter = (num) => {
    num != 0 ? (counterValue += num) : (counterValue = 0);
    counter.innerText = `${counterValue}`; // Render countValue
    counterValue >= amountValue
        ? (counter.style.color = "red")
        : (counter.style.color = "");
};
// Buttons
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const decrease = document.getElementById("decrease");
