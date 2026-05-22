let currencyButton = document.querySelector("[data-currency-toggle]");
let currencyValues = document.querySelectorAll(".rate");

currencyValues.forEach((value) => {
    let cashValue = value.textContent;
    let onlineValue = Number(cashValue.replace(",", ".")) + 0.1;

    value.dataset.cash = cashValue;
    value.dataset.online = onlineValue.toFixed(1).replace(".", ",");
})

currencyButton.addEventListener("click", () => {
    let nextMode = currencyButton.textContent === "Онлайн" ? "cash" : "online";

    currencyButton.textContent = nextMode === "online" ? "Онлайн" : "Наличные";

    currencyValues.forEach((value) => {
        value.textContent = value.dataset[nextMode];
    })
})
