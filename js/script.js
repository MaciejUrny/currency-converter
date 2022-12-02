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

    const init = () => {
        const formElement = document.querySelector(".js-form");
        const amountElement = document.querySelector(".js-amountPLN");
        const currencySelectionElement = document.querySelector(".js-currencySelection");
        const resultElement = document.querySelector(".js-result");

        formElement.addEventListener("submit", (event) => {
            event.preventDefault();

            const amount = +amountElement.value;
            const currency = currencySelectionElement.value;

            let result;
            const currencyValue = catchCurrencyValue(currency);

            resultElement.value = `${amount} PLN / ${currencyValue.toFixed(2)} ${currency} = ${result.toFixed(2)} ${currency}`;
        });

        welcome();

    };

    init();

}