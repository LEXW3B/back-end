const readline = require('readline-sync');

const name = readline.question('Digite seu nome: ');
const age = readline.question('Digite sua idade:');
console.log(`Hello, ${name}! You are ${age} years old!`);
