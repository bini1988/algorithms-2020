
/**
 * Сколько различных траекторий (способов) по плоскому пути из клетки №1 в клетку №N если возможны перемещения вперед на 1, 2 или 3 клетки
 * @description Kn = Kn-3 + Kn-2 + Kn-1
 * @param {number} N Конечная клетка
 * @param {number[]} [banned] Массив запрещенных клеток
 * @returns {number}
 */
function jumper(N, banned = []) {
  const K = [];

  K[0] = 0;
  K[1] = 1;
  K[2] = banned.includes(i) ? 0 : 1;

  for (let i = 3; i < N + 1; i++) {
    K[i] = banned.includes(i) ? 0 : K[i - 3] + K[i - 2] + K[i - 1];
  }
  return K[N];
}

/**
 * Какова минимальная стоимость траекторий по плоскому пути из клетки №1 в клетку №N если возможны перемещения вперед на 1 или 2 клетки
 * @description Kn = Kn-2 + Kn-1
 * @param {number} N Конечная клетка
 * @param {number[]} [price] Цена посещения клетки
 * @returns {number}
 */
function jumper_min(N, price = []) {
  // C[i] минимальная стоимость достижения клетки i
  const C = [];

  C[0] = Infinity;
  C[1] = price[0];
  C[2] = price[0] + price[1];

  for (let i = 3; i < N + 1; i++) {
    C[i] = price[i] + Math.min(C[i - 2], C[i - 1]);
  }
  return C[N];
}

module.exports = { jumper, jumper_min };
