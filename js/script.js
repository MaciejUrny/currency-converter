{
    const welcome = () => {
        console.log("Witaj, miło Cię tu widzieć.");
    };

    const catchCurrencyValue = (currency) => {
        const rateEUR = 4.6898;
        const rateCHF = 4.7523;
        const rateGBP = 5.3825;
        const rateUSD = 4.7975;

        switch (currency) {
            case "EUR":
                return rateEUR;
            case "CHF":
                return rateCHF;
            case "GBP":
                return rateGBP;
            case "USD":
                return rateUSD;
        };
    };

    const calculateResult = (amount, currencyValue) => {
        return amount / currencyValue;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amountPLN");
        const currencySelectionElement = document.querySelector(".js-currencySelection");
        const resultElement = document.querySelector(".js-result");

        const amount = +amountElement.value;
        const currency = currencySelectionElement.value;

        const currencyValue = catchCurrencyValue(currency);
        const result = calculateResult(amount, currencyValue);

        resultElement.value = `${amount} PLN / ${currencyValue.toFixed(2)} ${currency} = ${result.toFixed(2)} ${currency}`;
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);

        welcome();
    };

    init();

}