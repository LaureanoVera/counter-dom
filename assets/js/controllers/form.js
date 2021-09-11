const amountInput = document.getElementById("amount");
export const form = document.getElementById("amount-form");
export let amountValue = 0; // <= Store Amount
export const handleSubmit = (evt) => {
    evt.preventDefault(); // Prevent Default Submit Form
    amountValue = Number(amountInput.value);
    amountInput.value = String(0); // Reset Input Value
};
