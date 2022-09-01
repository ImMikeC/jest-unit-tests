//importar funciones
const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

// prueba de Euro a Dolar
test("3.5 Euros debieran ser 4.2 dolares.", function(){
    const d = fromEuroToDollar(3.5)
     expect(fromEuroToDollar(3.5)).toBe(4.2);
})

//prueba de Dolar a Yen
test("Seis dolares debieran ser 639.5 yenes", function(){
    const d = fromDollarToYen(6)
    const expected = (6 / 1.2) * 127.9; 
     expect(fromDollarToYen(6)).toBe(639.5);
})

//prueba de Yen a Libra Esterlina
test("24 Yenes debieran ser 0.15 Libras", function(){
    const d = fromYenToPound(24)
    const expected = (24 / 127.9) * 0.8; 
     expect(fromYenToPound(24)).toBe(0.15);
})