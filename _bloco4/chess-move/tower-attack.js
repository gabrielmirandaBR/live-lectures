let towerPositionLine = 7;
let towerPositionColumn = 4;

let targetPositionLine = 7;
let targetPositionColumn = 7;

let executeAttack = false;

// Horizontal e Vertical
if(towerPositionLine === targetPositionLine || towerPositionColumn === targetPositionColumn) {
  executeAttack = true;
};
console.log(executeAttack);