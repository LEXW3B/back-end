// IMC = peso / (altura * altura);
const readline = require('readline-sync')

const magreza = '- Abaixo do peso (magreza)';
const normal = '- Peso normal';
const sobrepeso = '- Acima do peso (sobrepeso)';
const Obesidade1 = '- Obesidade grau I';
const Obesidade2 = '- Obesidade grau II';
const Obesidade3ouMais = '- Obesidade graus III e IV';

const weigth = readline.question("What' your weight? ");
const heigth = readline.question("What' your height? ");
// const weigth = 90;
// const heigth = 1.69;
// console.log(`O imc solicitado é de ${imc.toFixed(0)}`);
const imc = weigth / (heigth * heigth);

if (imc < 18.5) return console.log(`O imc solicitado é de ${imc.toFixed(0)} ${magreza}`)

if (imc >= 18.5 && imc <= 24.9) return console.log(`O imc solicitado é de ${imc.toFixed(0)} ${normal}`);

if (imc >= 25 && imc <= 29.9) return console.log(`O imc solicitado é de ${imc.toFixed(0)} ${sobrepeso}`);

if (imc >= 30 && imc < 35) return console.log(`O imc solicitado é de ${imc.toFixed(0)} ${Obesidade1}`);

if (imc >= 35 && imc < 40) return console.log(`O imc solicitado é de ${imc.toFixed(0)} ${Obesidade2}`);

if (imc > 40) return console.log(`O imc solicitado é de ${imc.toFixed(0)} ${Obesidade3ouMais}`);


