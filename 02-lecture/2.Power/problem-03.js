const format = require("./format");

/**
 * Возведение в степень через двоичное разложение показателя степени
 * Сложност: O(log(n))
 */
function pow(a, n) {
  let r = 1;

  while (n) {
    r = (n % 2) ? r * a : r;
    n = (n - n % 2) / 2;
    a *= a;
  }
  return r;
}

module.exports = function ([line1, line2]) {
  const A = parseFloat(line1);
  const N = parseFloat(line2);

  return format(pow(A, N));
};
