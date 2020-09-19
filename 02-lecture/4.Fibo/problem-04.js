
/**
 * Умножение семетричных матриц 2x2
 * @param {bigint[]} a
 * @param {bigint[]} b
 */
function mult2x2(a, b) {
  const c = [];

  c[0] = a[0] * b[0] + a[1] * b[2];
  c[1] = c[2] = a[0] * b[1] + a[1] * b[3];
  c[3] = a[2] * b[1] + a[3] * b[3];

  return c;
}

/**
 * Возведение в степень n матрицы 2x2
 */
function pow(a, n) {
  let r = [1n, 1n, 1n, 0n];

  while (n > 0) {
    r = (n & 1n) ? mult2x2(r, a) : r;
    n = n >> 1n;
    a = mult2x2(a, a);
  }
  return r;
}

/**
 * N-ое число Фибоначчи через возведение матрицы в степень
 */
function fib(n) {
  return pow([1n, 1n, 1n, 0n], n)[3];
}

module.exports = function ([line1]) {
  const N = BigInt(line1);
  return fib(N);
};
