// Condicional
let numberA = 10;
let numberB = 20;
let numberC = 50;

if (numberA > numberB && numberA > numberC) {
  console.log("o número A é o vencedor: " + numberA);
} else if (numberB > numberA && numberB > numberC) {
  console.log("O número B é o vencedor: " + numberB);
} else {
  console.log("O número C é o vencedor: " + numberC);
};


// Como saber se o num1 + num 2 é par?
let number1 = 5;
let number2 = 5;

let sum = number1 + number2;

if(sum % 2 == 0) {
  console.log("O número é par: " + sum);
} else {
  console.log("O número é ímpar: " + sum);
};


// Ou também pode fazer dessa maneira
let number1 = 5;
let number2 = 2;

let sum = number1 + number2;

let isEven = false;

if(sum % 2 == 0) {
  isEven = true;
};
console.log(isEven);


// Qual dia da semana é?
let weekDay = 7;

switch (weekDay) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda");
    break;
  case 3:
    console.log("Terça");
    break;
  case 4:
    console.log("Quarta");
    break;
  case 5:
    console.log("Quinta");
    break;
  case 6:
    console.log("Sexta");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Esse dia não existe!");
    break;
}