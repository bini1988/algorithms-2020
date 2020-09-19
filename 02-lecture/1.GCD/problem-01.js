
/**
 * Поиск НОД через вычитание
 */
function gcd(a, b) {
  while (a != b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
}

module.exports = function ([line1, line2]) {
  const A = BigInt(line1);
  const B = BigInt(line2);

  return gcd(A, B);
};
