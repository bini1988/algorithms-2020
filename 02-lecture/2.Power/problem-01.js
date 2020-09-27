const format = require("./format");

/**
 * Итеративный способ возведения в степень
 * Сложность: O(n)
 */
function pow(a, n) {
  let r = 1;

  while(n--) { r *= a; }

  return r;
}

module.exports = function ([line1, line2]) {
  const A = parseFloat(line1);
  const N = parseFloat(line2);

  return format(pow(A, N));
};
