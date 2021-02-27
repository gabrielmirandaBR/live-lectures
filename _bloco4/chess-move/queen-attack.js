let queenPositionLine = 7;
let queenPositionColumn = 3;

let targetPositionLine = 7;
let targetPositionColumn = 4;

let executeAttack = false;

if(queenPositionLine === targetPositionLine || queenPositionColumn === targetPositionColumn) {
  executeAttack = true;
};
console.log(executeAttack);