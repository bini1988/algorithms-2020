const format = require("./format");

/**
 * Итеративный способ возведения в степень
 */
function pow(a, n) {
  for(var r = 1; n; n--) { r *= a; }
  return r;
}

module.exports = function ([line1, line2]) {
  const A = parseFloat(line1);
  const N = parseFloat(line2);

  return format(pow(A, N));
};
