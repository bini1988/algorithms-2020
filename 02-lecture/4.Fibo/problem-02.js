
/**
 * N-ое число Фибоначчи через итерацию
 */
function fib(n) {
  let [p1, p2] = [0n, 1n];

  while(n--) {
    [p1, p2] = [p2, p1 + p2];
  }
  return p1;
}

module.exports = function ([line1]) {
  const N = BigInt(line1);

  return fib(N);
};
