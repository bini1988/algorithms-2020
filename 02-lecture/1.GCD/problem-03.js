
/**
 * Поиск НОД через битовые операции
 */
function gcd(a, b) {
  if (a == b) {
    return a;
  }

  if (~a & 1n) { // a четное
    return (b & 1n) // b нечетное
      ? gcd(a >> 1n, b)
      : gcd(a >> 1n, b >> 1n) << 1n;
  }
  if (~b & 1n) { // b четное
    return gcd(a, b >> 1n);
  }
  if (a > b) {
    return gcd((a - b) >> 1n, b)
  }
  return gcd((b - a) >> 1n, a);
}

module.exports = function ([line1, line2]) {
  const A = BigInt(line1);
  const B = BigInt(line2);

  return gcd(A, B);
};
