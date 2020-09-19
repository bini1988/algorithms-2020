const format = require("./format");

/**
 * Возведение в степень через двоичное разложение показателя степени
 * Сложност: O(log(n))
 */
function pow(a, n) {
  let r = 1;

  while (n > 0) {
    r = (n % 2n) ? r * a : r;
    n = n >> 1n;
    a *= a;
  }
  return r;
}

module.exports = function ([line1, line2]) {
  const A = parseFloat(line1);
  const N = BigInt(line2);

  return format(pow(A, N));
};
