let queenPositionLine = 4;
let queenPositionColumn = 4;

let targetPositionLine = 5;
let targetPositionColumn = 3;

let executeAttack = false;

// Horizontal ou Vertical
if ((queenPositionLine === targetPositionLine) || (queenPositionColumn === targetPositionColumn)) {
  executeAttack = true;
};

// Diagonal Superior Direita
for (let supDir = 1; supDir < 8; supDir += 1) {
  let lineQueen = queenPositionLine + supDir;
  let columnQueen = queenPositionColumn + supDir;

  if (lineQueen > 8 || columnQueen > 8) {
    break;
  } else if ((lineQueen === targetPositionLine) && (columnQueen === targetPositionColumn)) {
    executeAttack = true;
  }
};

// Diagonal Superior Esquerda
for (let supEsq = 1; supEsq < 8; supEsq += 1) {
  let lineQueen = queenPositionLine + supEsq;
  let columnQueen = queenPositionColumn - supEsq;

  if (lineQueen > 8 || columnQueen < 1) {
    break;
  } else if ((lineQueen == targetPositionLine) && (columnQueen == targetPositionColumn)) {
    executeAttack = true;
  }
};

console.log(executeAttack);
