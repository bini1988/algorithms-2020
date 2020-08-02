
/**
 * Расчет значения факториала n!
 */
function fac(n) {
  return n == 0 ? 1 : n * fac(n - 1);
}

/**
 * Расчет:
 *
 * (n) = ___n!___
 * (k)   k!(n-k)!
 *
 */
function nk(n, k) {
  return fac(n) / (fac(k) * fac(n - k));
}

function min(a, b) {
  return a < b ? a : b;
}

/**
 * Расчет:
 *
 * C(n N) = sum (-1)^k (n)(n + N - 10k - 1)
 *                     (k)(      n-1      )
 */
function cN(n, N) {
  let c = 0;

  for(let k = 0; k < min(n, N / 10); k++) {
    c += Math.pow(-1, k) * nk(n, k) * nk(n + N - 10 * k - 1, n - 1);
  }
  return Math.round(c);
}

module.exports = function ([line]) {
  const n = parseInt(line, 10);

  return cN(2 * n, n * 9);
};
