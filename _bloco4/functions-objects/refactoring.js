// Média
function realizaMedia (arrayNumbers) {
  let sum = 0;
  let media = 0;
  for(indexArrayNumbers = 0; indexArrayNumbers < arrayNumbers.length; indexArrayNumbers += 1) {
    sum = sum + arrayNumbers[indexArrayNumbers];
  }
  media = sum / (arrayNumbers.length);
  return media;
}
console.log(realizaMedia([1,2,3,4,5,6]));


// Nome Completo
function imprimeNomeCompleto (nome, sobrenome) {
  return (nome + " " + sobrenome);
}
console.log(imprimeNomeCompleto("Gabriel", "Miranda"));

// Array com 100 caracteres
function addCaracteres (caracter) {
  let arrayCaracteres = [];
  for(let index = 0; index < 100; index += 1) {
    arrayCaracteres.push(caracter);
  }
  return arrayCaracteres;
}
console.log(addCaracteres("trybe"));

// Mega-Sena
function randomNumbers (maxValue) {
  let randomNumber = Math.ceil(Math.random() * maxValue);
  return randomNumber;
}

function generateGame () {
  let game = [];
  for(let index = 0; index < 6; index += 1) {
    game.push(randomNumbers(60));
  }
  return game;
}

console.log(`Números da Mega Sena: ${generateGame()}`);
console.log(`Meu Jogo: ${generateGame()}`);