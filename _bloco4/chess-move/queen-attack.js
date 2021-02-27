let queenPositionLine = 7;
let queenPositionColumn = 3;

let targetPositionLine = 8;
let targetPositionColumn = 4;

let executeAttack = false;

// Horizontal ou Vertical
if ((queenPositionLine === targetPositionLine) || (queenPositionColumn === targetPositionColumn)) {
  executeAttack = true;
};

// Superior Direito
for (let supDir = 1; supDir < 8; supDir += 1) {
  queenPositionLine = queenPositionLine + supDir;
  queenPositionColumn = queenPositionColumn + supDir;
  if (queenPositionLine > 8 || queenPositionColumn > 8) {
    break;
  } else if ((queenPositionLine == targetPositionLine) && (queenPositionColumn == targetPositionColumn)) {
    executeAttack = true;
  }
};
console.log(executeAttack);