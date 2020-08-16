
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

function move(mask, dir, steps = 1n) {
  switch (dir) {
    case "t": return mask << (8n * steps); // Вверх
    case "b": return mask >> (8n * steps); // Вниз
    case "r": return mask << (1n * steps); // Вправо
    case "l": return mask >> (1n * steps); // Влево
    case "tr": return mask << (9n * steps); // Вверх/Вправо
    case "br": return mask >> (7n * steps); // Вниз/Вправо
    case "tl": return mask << (7n * steps); // Вверх/Влево
    case "bl": return mask >> (9n * steps); // Вниз/Влево
    default: return mask;
  }
}

function movesOf(piece, board, whitesBoard, dirs = []) {
  let out = 0x0000_0000_0000_0000n;
  let bounds = 0xFFFF_FFFF_FFFF_FFFFn;

  for (let dir of dirs) {
    for (let i = 1n, mask = 0n; mask == 0n; i++) {
      mask = move(piece, dir, i);
      out |= mask;
      mask &= (board | 0xFF818181818181FFn);
      mask &= bounds;
    }
  }
  // Нельзя занимать уже занятые позиции белых фигур
  out &= out ^ whitesBoard;

  return out;
}

function byOr(out, piece) {
  return out | piece;
}

function compute(fen) {
  const pieces = fen2bitboard(fen);
  const [,,
    whiteBishop,   // белый слон
    whiteRook,     // белая ладья
    whiteQueen,    // белый ферзь
  ] = pieces;

  let board = pieces.reduce(byOr, 0n);
  let whitesBoard = pieces.slice(0, 6).reduce(byOr, 0n);

  // белая ладья
  let rookDirs = ["t", "r", "b", "l"];
  let rook = movesOf(whiteRook, board, whitesBoard, rookDirs);

  // белый слон
  let bishopDirs = ["tr", "br", "tl", "bl"];
  let bishop = movesOf(whiteBishop, board, whitesBoard, bishopDirs);

  // белый ферзь
  let queenDirs = ["t", "r", "b", "l", "tr", "br", "tl", "bl"];
  let queen = movesOf(whiteQueen, board, whitesBoard, queenDirs);

  return [rook, bishop, queen];
}

compute("5k2/8/4Q3/8/5B2/2R5/8/3K4");
// compute("5k2/1Pr5/4Q1n1/8/5B2/1R3p2/7q/1bK5");
// compute("4k2r/3q4/8/6b1/8/P7/2P2K2/2BQ1n1R");

module.exports = function ([line]) {
  return compute(line);
};
