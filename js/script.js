{
    const welcome = () => {
        console.log("Witaj, miło Cię tu widzieć.");
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        const amountElement = document.querySelector(".js-amountPLN");
        const currencySelectionElement = document.querySelector(".js-currencySelection");
        const resultElement = document.querySelector(".js-result");

        const rateEUR = 4.6898;
        const rateCHF = 4.7523;
        const rateGBP = 5.3825;
        const rateUSD = 4.7975;

        formElement.addEventListener("submit", (event) => {
            event.preventDefault();

            const amount = +amountElement.value;
            const currency = currencySelectionElement.value;

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
            };

            resultElement.value = `${amount} PLN / ${currencyValue.toFixed(2)} ${currency} = ${result.toFixed(2)} ${currency}`;
        });

        welcome();

    };

    init();

}