let formElement = document.querySelector(".js-form")
let exchangeCurrencyElement = document.querySelector(".js-exchangeCurrency")
let sumPlnElement = document.querySelector(".js-sumPln")
let gettingMoneyElement = document.querySelector(".js-gettingMoney")

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = exchangeCurrencyElement.value;
    let sumPln = sumPlnElement.value;

    gettingMoney = sumPln / currency;

    gettingMoneyElement.innerText = gettingMoney.toFixed(2);
  
});
