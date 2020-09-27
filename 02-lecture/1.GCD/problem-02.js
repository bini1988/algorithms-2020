
/**
 * Поиск НОД через остаток
 */
function gcd(a, b) {
  while (a && b) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }
  return a || b;
}

/**
 * Рекурсивный поиск НОД через остаток
 */
function gcd2(a, b) {
  return b ? gcd2(b, a % b) : a;
}

module.exports = function ([line1, line2]) {
  const A = BigInt(line1);
  const B = BigInt(line2);

  return gcd(A, B);
};
