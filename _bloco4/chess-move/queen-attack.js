let queenPositionLine = 4;
let queenPositionColumn = 4;

let targetPositionLine = 3;
let targetPositionColumn = 5;

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

// Diagonal Inferior Direita
for (infDir = 1; infDir < 8; infDir += 1) {
  let lineQueen = queenPositionLine - infDir;
  let columnQueen = queenPositionColumn + infDir;

  if (lineQueen < 1 || columnQueen > 8) {
    break;
  } else if ((lineQueen === targetPositionLine) && (columnQueen === targetPositionColumn)) {
    executeAttack = true;
  }
};

console.log(executeAttack);