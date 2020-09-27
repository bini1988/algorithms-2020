
/**
 * Количество простых чисел от 1 до N через решето Эратосфена со сложностью O(n)
 */
function prime(n) {
  let pr = [];
  let lp = new Uint32Array(n + 1);

  for(let i = 2; i <= n; i++) {
    if (!lp[i]) {
      lp[i] = i;
      pr.push(i);
    }
    let j = 0;
    let p = pr[j];

    while (p <= lp[i] && p * i <= n) {
      lp[p * i] = p;
      p = pr[++j];
    }
  }
  return pr.length;
}

module.exports = function ([line1]) {
  const N = parseInt(line1, 10);

  return prime(N);
};
