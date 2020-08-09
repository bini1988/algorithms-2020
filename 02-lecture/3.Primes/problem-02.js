
/**
 * Количество простых чисел от 1 до N через решето Эратосфена со сложностью O(n log log n)
 */
function prime(n) {
  let m = new Uint8Array(n + 1);
  let c = n - 1;

  // 0 - является простым числом
  // 1 - не является простым числом
  m[0] = m[1] = 1;

  for(let i = 2; i * i <= n; i++) {
    if (m[i]) { continue; }

    for(let j = i * i; j <= n; j += i) {
      if (!m[j]) { m[j] = 1; c--; }
    }
  }
  return c;
}

module.exports = function ([line1]) {
  const N = parseInt(line1, 10);

  return prime(N);
};
