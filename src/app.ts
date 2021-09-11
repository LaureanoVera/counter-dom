// < ===== FORM ===== >
const amountInput = <HTMLInputElement>document.getElementById("amount");
const form = <HTMLFormElement>document.getElementById("amount-form");

let amountValue: number = 0; // <= Store Amount

const handleSubmit = (evt: Event): void => {
  evt.preventDefault(); // Prevent Default Submit Form
  amountValue = Number(amountInput.value);
  amountInput.value = String(0); // Reset Input Value
  handleCounter(0)
};
// < ===== /FORM ===== >

// < ===== COUNTER ===== >
let counterValue: number = 0; // <= Store Counter
const counter = <HTMLElement>document.getElementById("counter-value"); // select container of value

const controller = <HTMLElement>document.getElementById('controller')
controller.innerText = `0`
const handleController = () => {
  const res = amountValue - counterValue;
  res > 0 
    ? controller.innerText = `${res}`
    : controller.innerText = `0`
}

const handleCounter = (num: number): void => {
  num != 0 ? (counterValue += num) : (counterValue = 0);
  counter.innerText = `${counterValue}`; // Render countValue
  if ((counterValue >= amountValue) && (amountValue !== 0)) {
    counter.classList.replace('text-dark', "text-info")
  }
  else {
    (counter.classList.replace("text-info", 'text-dark'));
  }
  handleController()
};

// Get Buttons from the DOM
const increase = <HTMLButtonElement>document.getElementById("increase");
const reset = <HTMLButtonElement>document.getElementById("reset");
const decrease = <HTMLButtonElement>document.getElementById("decrease");
// < ===== /COUNTER ===== >

// Controler
const main = (): void => {
  counter.innerText = `0`; // Render countValue
  
  form?.addEventListener("submit", handleSubmit);
  
  increase.addEventListener('click', () => handleCounter(1))
  reset.addEventListener('click', () => handleCounter(0))
  decrease.addEventListener('click', () => handleCounter(-1))
};

main();
