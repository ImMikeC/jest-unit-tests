
//datos basicos
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
//dolar a yenes
const fromDollarToYen = (d) => {
    return (d / oneEuroIs.USD) * oneEuroIs.JPY;
}
const fromEuroToDollar = (e) => {
    return e * oneEuroIs.USD;
}
//yen a libra inglesa
const fromYenToPound = (y) => {
    return +((y / oneEuroIs.JPY) * oneEuroIs.GBP).toFixed(2);
}

//console.log(fromYenToPound(24))

//exportar para usar en test.js
module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };