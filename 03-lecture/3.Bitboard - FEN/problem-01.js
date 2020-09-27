
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

module.exports = function ([line]) {
  return fen2bitboard(line);
};
