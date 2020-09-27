
/**
 * N-ое число Фибоначчи через рекурсию
 */
function fib(n) {
  if (n === 0n) { return 0; };
  if (n === 1n) { return 1; };
  return fib(n - 1n) + fib(n - 2n);
}

module.exports = function ([line1]) {
  const N = BigInt(line1);

  return fib(N);
};
