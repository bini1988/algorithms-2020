
function draw(cb) {
  const lines = [];

  for (let x = 0; x < 25; x++) {
    const line = [];

    for (let y = 0; y < 25; y++) {
      line.push(cb(x, y));
    }
    lines.push(line.join(" "));
  }
  return lines.join("\n\r") + "\n\r";
}

/** 01 */
console.log(draw((x, y) => (x < y) ? "#" : "."))

/** 02 */
console.log(draw((x, y) => (x == y) ? "#" : "."))

/** 03 */
console.log(draw((x, y) => (24 - x == y) ? "#" : "."))

/** 04 */
console.log(draw((x, y) => (y < 30 - x) ? "#" : "."))

/** 06 */
console.log(draw((x, y) => (x < 10 || y < 10) ? "#" : "."))

/** 07 */
console.log(draw((x, y) => (x > 15 && y > 15) ? "#" : "."))

/** 08 */
console.log(draw((x, y) => x * y == 0 ? "#" : "."))

/** 09 */
console.log(draw((x, y) => (x + 10 < y) || (x > y + 10) ? "#" : "."))

/** 11 */
console.log(draw((x, y) => x % 22 == 1 || y % 22 == 1 ? "#" : "."))

/** 12 */
console.log(draw((x, y) => x * x + y * y <= 21 * 21 ? "#" : "."))

/** 13 */
console.log(draw((x, y) => (y + x < 20) || (y + x > 28) ? "." : "#"))

/** 20 */
console.log(draw((x, y) => x % 2 == y % 2 ? "#" : "."))

/** 23 */
console.log(draw((x, y) => -x % 3 == y % 2 ? "#" : "."))

/** 25 */
console.log(draw((x, y) => x % 6 && y % 6 ? "." : "#"))
