let bishopPositionLine = 4;
let bishopPositionColumn = 4;

let targetPositionLine = 1;
let targetPositionColumn = 1;

let executeAttack = false;

// Diagonal Superior Direita
for (let supDir = 1; supDir < 8; supDir += 1) {
  let lineBishop = bishopPositionLine + supDir;
  let columnBishop = bishopPositionColumn + supDir;

  if (lineBishop > 8 || columnBishop > 8) {
    break;
  } else if ((lineBishop === targetPositionLine) && (columnBishop === targetPositionColumn)) {
    executeAttack = true;
  }
};

// Diagonal Superior Esquerda
for (let supEsq = 1; supEsq < 8; supEsq += 1) {
  let lineBishop = bishopPositionLine + supEsq;
  let columnBishop = bishopPositionColumn - supEsq;

  if(lineBishop > 8 || columnBishop < 1) {
    break;
  } else if ((lineBishop === targetPositionLine) && (columnBishop === targetPositionColumn)) {
    executeAttack = true;
  }
};

// Diagonal Inferior Direita
for (let infDir = 1; infDir < 8; infDir += 1) {
  let lineBishop = bishopPositionLine - infDir;
  let columnBishop = bishopPositionColumn +infDir;

  if(lineBishop < 1 || columnBishop > 8) {
    break;
  } else if ((lineBishop === targetPositionLine) && (columnBishop === targetPositionColumn)) {
    executeAttack = true;
  }
};

// Diagonal Inferior Esquerda
for (infEsq = 1; infEsq < 8; infEsq += 1) {
  let lineBishop = bishopPositionLine - infEsq;
  let columnBishop = bishopPositionColumn - infEsq;

  if(lineBishop < 1 || columnBishop < 1) {
    break;
  } else if ((lineBishop === targetPositionLine) && (columnBishop === targetPositionColumn)) {
    executeAttack = true;
  }
};
console.log(executeAttack);
