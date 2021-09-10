// FORM
const amount = document.getElementById("amount");
const form = document.getElementById("amount-form");

let amountValue = 0;
const handleSubmit = () => {
  amountValue = Number(amount.value);
  amount.value = 0;
};

form.addEventListener("submit", handleSubmit);

// ===== ===== COUNTER ===== =====
let countValue = 0; // initial value (counter)
const counter = document.getElementById("counter-value"); // select container of value
counter.innerText = `${countValue}`; // render countValue

const handleCounter = (value) => {
  // handle counter values
  value != 0 ? (countValue += value) : (countValue = 0);
  counter.innerText = `${countValue}`;
  countValue >= amountValue 
    ? counter.style.color = 'red'
    : counter.style.color = ''
};

// increase counter in one
const increase = document.getElementById("increase");
increase.addEventListener("click", () => handleCounter(1));

// reset counter
const reset = document.getElementById("reset");
reset.addEventListener("click", () => handleCounter(0));

// decrease counter in one
const decrease = document.getElementById("decrease");
decrease.addEventListener("click", () => handleCounter(-1));
