
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
 * Расчет по формуле производящей функции (https://neerc.ifmo.ru/wiki/index.php?title=%D0%97%D0%B0%D0%B4%D0%B0%D1%87%D0%B0_%D0%BE_%D1%81%D1%87%D0%B0%D1%81%D1%82%D0%BB%D0%B8%D0%B2%D1%8B%D1%85_%D0%B1%D0%B8%D0%BB%D0%B5%D1%82%D0%B0%D1%85):
 *
 * C(n N) = sum (-1)^k (n)(n + N - 10k - 1)
 *                     (k)(      n-1      )
 *
 * К сожалению при n > 8 данная формула выходит за пределы точности 64-бинтого числа с плавающей точкой
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
