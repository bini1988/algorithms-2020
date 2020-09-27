
/**
 * N-ое число Фибоначчи через формулу золотого сечения
 */
function fib(n) {
  return Math.pow(0.5 + Math.sqrt(5) * 0.5, n) / Math.sqrt(5) + 0.5;
}

module.exports = function ([line1]) {
  const N = parseInt(line1, 10);

  return Math.trunc(fib(N));
};
