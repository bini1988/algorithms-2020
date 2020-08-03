
function c(N) {
  const m = [[1n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 1n]];

  for(let n = 1; n < N + 1; n++) {
    m[n] = m[n] || [1n];

    for(let k = 1; k <= (n + 1) * 9; k++) {
      for(let l = Math.max(0, k - 9); l <= k; l++) {
        m[n][k] = BigInt(m[n][k] || 0n) + BigInt(m[n - 1][l] || 0n);
      }
    }
  }

  return m[N - 1].reduce((out, k) => (out += k * k, out), 0n);
}

/**
 * Идея взята отсюда http://www.ega-math.narod.ru/Quant/Tickets.htm
 * Создается таблица значений Nn(k) - количество n-значных номеров
 * с суммой цифр, равной k, по рекурентной формуле:
 *
 * Nn(k)=sum Nn-1(k - l)
 *
 * Во избежания переполненния используется тип данных BigInt
 */
module.exports = function ([line]) {
  const n = parseInt(line, 10);

  return c(n);
};
