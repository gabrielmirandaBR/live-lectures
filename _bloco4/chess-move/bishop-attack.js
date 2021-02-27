let bishopPositionLine = 4;
let bishopPositionColumn = 4;

let targetPositionLine = 8;
let targetPositionColumn = 8;

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
console.log(executeAttack);
