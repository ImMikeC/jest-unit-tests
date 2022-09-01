
//datos basicos
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
//dolar a yenes
const fromDollarToYen = (d) => {
    return (dollar / oneEuroIs.USD) * oneEuroIs.JPY;
}
const fromEuroToDollar = (eureo) => {
    return euro * oneEuroIs.USD;
}
//yen a libra inglesa
const fromYenToPound = (y) => {
    return (yen / oneEuroIs.JPY) * oneEuroIs.GBP;
}

//console.log(fromEuroToDollar(5))

//exportar para usar en test.js
module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };