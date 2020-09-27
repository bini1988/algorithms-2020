
function toIndex(ch) {
  switch (ch) {
    case "P": return 0;
    case "N": return 1;
    case "B": return 2;
    case "R": return 3;
    case "Q": return 4;
    case "K": return 5;
    case "p": return 6;
    case "n": return 7;
    case "b": return 8;
    case "r": return 9;
    case "q": return 10;
    case "k": return 11;
  }
}

function fen2bitboard(fen = "") {
  let pieces = [0n, 0n, 0n, 0n, 0n, 0n, 0n, 0n, 0n, 0n, 0n, 0n];
  let col = 0;
  let row = 7;

  for (let ch of fen) {
    let pos = parseInt(ch, 10);

    if (Number.isInteger(pos)) {
      col += pos;
    } else if (ch === "/") {
      row--;
      col = 0;
    } else {
      pieces[toIndex(ch)] |= (0x01n << BigInt(col + row * 8));
      col++;
    }
  }
  return pieces;
}

function move(mask, dir) {
  const bounds = 0xFFFF_FFFF_FFFF_FFFFn;
  const mR = 0x7F7F_7F7F_7F7F_7F7Fn;
  const mL = 0xFEFE_FEFE_FEFE_FEFEn;

  switch (dir) {
    case "t": return (mask << 8n) & bounds; // Вверх
    case "b": return (mask >> 8n) & bounds; // Вниз
    case "r": return (mask & mR) << 1n; // Вправо
    case "l": return (mask & mL) >> 1n; // Влево
    case "tr": return ((mask & mR) << 9n) & bounds; // Вверх/Вправо
    case "br": return ((mask & mR) >> 7n) & bounds; // Вниз/Вправо
    case "tl": return ((mask & mL) << 7n) & bounds; // Вверх/Влево
    case "bl": return ((mask & mL) >> 9n) & bounds; // Вниз/Влево
    default: return mask;
  }
}

function movesOf(piece, inverseBoard, whitesBoard, dirs = []) {
  let out = 0x0000_0000_0000_0000n;

  for (let dir of dirs) {
    for (let mask = piece; mask; mask &= inverseBoard) {
      mask = move(mask, dir);
      out |= mask;
    }
  }
  // Нельзя занимать уже занятые позиции белых фигур
  out &= out ^ whitesBoard;

  return out;
}

function compute(fen) {
  const pieces = fen2bitboard(fen);
  const [,,
    whiteBishop,   // белый слон
    whiteRook,     // белая ладья
    whiteQueen,    // белый ферзь
  ] = pieces;

  let bounds = 0xFFFF_FFFF_FFFF_FFFFn;

  // инвертированный bitboard: 1 - пустая клетка, 0 - клетка с фигурой
  let inverseBoard = pieces
    .reduce((out, piece) => out & (bounds - piece), bounds);

  // bitboard с белыми фигурами: 0 - пустая клетка, 1 - клетка с фигурой
  let whitesBoard = pieces.slice(0, 6)
    .reduce((out, piece) => out | piece, 0n);

  // белая ладья
  let rookDirs = ["t", "r", "b", "l"];
  let rook = movesOf(whiteRook, inverseBoard, whitesBoard, rookDirs);

  // белый слон
  let bishopDirs = ["tr", "br", "tl", "bl"];
  let bishop = movesOf(whiteBishop, inverseBoard, whitesBoard, bishopDirs);

  // белый ферзь
  let queenDirs = ["t", "r", "b", "l", "tr", "br", "tl", "bl"];
  let queen = movesOf(whiteQueen, inverseBoard, whitesBoard, queenDirs);

  return [rook, bishop, queen];
}

module.exports = function ([line]) {
  return compute(line);
};
