// const path = require('path');

// console.log(path.dirname('/user/share/gnome'));

// console.log(path.resolve('/user/share/gnome'));
// console.log(path.resolve('/', 'user', 'share', 'gnome'));

// const temp = require('./temp'); ou
const { celsiusToFahrenheit, fahrenheitToCelsius } = require('../mymodules/temp');
const valor = 100;

// console.log(`A transformação de ${valor}° Celsios para Fahrenheit é ${temp.celsiusToFahrenheit(valor)}`);
// console.log(`A transformação de ${valor}° Fahrenheit para Celsios é ${temp.fahrenheitToCelsius(valor)}`);
// ou
console.log(`A transformação de ${valor}° Celsios para Fahrenheit é ${celsiusToFahrenheit(valor)}`);
console.log(`A transformação de ${valor}° Fahrenheit para Celsios é ${fahrenheitToCelsius(valor)}`);