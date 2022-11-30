console.log("Witaj, miło Cię tu widzieć.");

let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amountPLN");
let currencySelectionElement = document.querySelector(".js-currencySelection");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.6898;
let rateCHF = 4.7523;
let rateGBP = 5.3825;
let rateUSD = 4.7975;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencySelectionElement.value;

    let result;
    let currencyValue;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            currencyValue = rateEUR;
            break;
        case "CHF":
            result = amount / rateCHF;
            currencyValue = rateCHF;
            break;
        case "GBP":
            result = amount / rateGBP;
            currencyValue = rateGBP;
            break;
        case "USD":
            result = amount / rateUSD;
            currencyValue = rateUSD;
            break;
    }

    resultElement.value = `${amount} PLN / ${currencyValue.toFixed(2)} ${currency} = ${result.toFixed(2)} ${currency}`;
});
