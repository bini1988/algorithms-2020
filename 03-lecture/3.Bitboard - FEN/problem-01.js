
function toIndex(piece) {
  switch (piece) {
    case "P": return 0;
    case "N": return 1;
    case "B": return 2;
    case "R": return 3;
    case "Q": return 4;
    case "K": return 5;
  }
}

function fen2bitboard(fen = "") {
  let whites = [0n, 0n, 0n, 0n, 0n, 0n];
  let blacks = [0n, 0n, 0n, 0n, 0n, 0n];
  let col = 0;
  let row = 7;

  for (let ch of fen) {
    let key = ch.toUpperCase();
    let offset = parseInt(ch, 10);

    if (key === "/") {
      row--;
      col = 0;
    } else if (Number.isInteger(offset)) {
      col += offset;
    } else {
      let pieces = (ch.charCodeAt(0) >= 97) ? blacks : whites;
      let index = toIndex(key);

      pieces[index] |= (0x01n << BigInt(col + row * 8));
      col++;
    }
  }
  return [...whites, ...blacks];
}

module.exports = function ([line]) {
  return fen2bitboard(line);
};
