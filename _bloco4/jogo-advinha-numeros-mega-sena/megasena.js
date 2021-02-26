// JOGO DA MEGASENA - SORTEIA 6 NÚMEROS E GANHA QUEM ACERTAR TUDO.

let megaSenaNumbers = [];
 
let firstNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60);

megaSenaNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber];

let megaSenaGame1 = [13, 15, 22, 30, 48, 50];
let megaSenaGame2 = [60, 5, 30, 12, 37, 29];
let megaSenaGame3 = [12, 54, 1, 9, 6, 25];

let megaSenaGames = [megaSenaGame1, megaSenaGame2, megaSenaGame3];



for (let indexGames = 0; indexGames < megaSenaGames.length; indexGames += 1) {
  let hits = 0;
  for (let indexMega = 0; indexMega < megaSenaNumbers.length; indexMega += 1) {
    for (let indexPlay = 0; indexPlay < megaSenaGames[indexGames]. length; indexPlay += 1) {
      if (megaSenaNumbers[indexMega] === megaSenaGames[indexGames][indexPlay]) {
        hits += 1;
      }
    }
  }
console.log("----------------------------------");
console.log(`Jogo: ${indexGames + 1}.`);
console.log(`Os números da MegaSena são: ${megaSenaNumbers}.`);
console.log(`O seu jogos é: ${megaSenaGames[indexGames]}.`);
console.log("----------------------------------");
console.log(`Acertos: ${hits}`);
};