
function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}

/**
 * Количество простых чисел от 1 до N через перебор делителей
 */
function prime(n) {
  let count = 0;

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) count++;
  }
  return count;
}

module.exports = function ([line1]) {
  const N = BigInt(line1);

  return prime(N);
};
