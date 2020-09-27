const format = require("./format");

/**
 * Возведение в степень через степень двойки с домножением
 * Сложност: O(log(n) + n/2)
 */
function pow(a, n) {
  let r = a;
  let k = 1;

  while (k * 2 < n) {
    r *= r;
    k *= 2;
  }
  while (k < n) {
    r *= a;
    k++;
  }
  return n > 0 ? r : 1;
}

module.exports = function ([line1, line2]) {
  const A = parseFloat(line1);
  const N = parseFloat(line2);

  return format(pow(A, N));
};
