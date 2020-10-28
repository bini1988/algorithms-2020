
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

/**
 * Шахматный король на поле MxN находится в ячейке [1,1], сколько способов добраться до клетки [N,M] шагая только вправо или вниз
 * @param {number} N
 * @param {number} M
 */
function king(N, M) {
  // K[i][j] количество способов достичь клетки [i,j]
  const K = [];

  for (let i = 0; i < N + 1; i++) {
    K[i] = K[i] || [0];
  }
  for (let j = 0; j < M + 1; j++) {
    K[0][j] = 0;
  }
  for (let i = 1; i < N + 1; i++) {
    for (let j = 1; j < M + 1; j++) {
      if (i === 1 && j === 1) {
        K[i][j] = 1;
      } else {
        K[i][j] = K[i - 1][j] + K[i][j - 1];
      }
    }
  }
  return K[N][M];
}

/**
 * Длина наибольшей общей подпоследовательности между двумя массивами чисел A и B
 * @description Массив C (подпоследовательность) содержащий элементы A в исходном порядке но возможно не все
 * @param {number[]} A Массив длиной N
 * @param {number[]} B Массив длиной M
 */
function subsequence(A = [], B = []) {
  // F[i][j] - длина наибольшей возможной подпоследовательности частей A и B
  // A[0:i] - часть A с первыми i элементами
  // B[0:i] - часть B с первыми j элементами
  //           -> 1 + F[i-1][j-1], если A[i] === B[i]
  // F[i][j] = |
  //           -> max(F[i][j-1], F[i-1][j]), если A[i] !== B[i]
  // F[0][j] = 0; F[i][0] = 0;
  const F = [];
  const N = A.length;
  const M = B.length;

  for (let i = 0; i < N + 1; i++) {
    F[i] = [];
    for (let j = 0; j < M + 1; j++) {
      F[i][j] = 0;
    }
  }

  for (let i = 1; i < N + 1; i++) {
    for (let j = 1; j < M + 1; j++) {
      if (A[i-1] === B[j-1]) {
        F[i][j] = 1 + F[i-1][j-1];
      } else {
        F[i][j] = Math.max(F[i][j-1], F[i-1][j]);
      }
    }
  }
  return F[N][M];
}

/**
 * Длина наибольшая возрастающая подпоследовательность для массива чисел A
 * @description Массив C (подпоследовательность) содержащий элементы A в исходном порядке но возможно не все
 * @param {number[]} A Массив длиной N
 */
function g_subsequence(A = []) {
  // F[i] - длина наибольшей возрастающей подпоследовательности для среза A[0:i], которорая заканчивается и сожержит элемент ai = A[i-1]
  // F[i] = max(F[j]) + 1, если A[i] > A[j], j < i
  // F[0] = 0;
  const F = Array.from(A).fill(Infinity);
  const N = A.length;

  for (let i = 0; i < N; i++) {
    F[i] = 1;

    for (let j = 0; j < i; j++) {
      if (A[i] > A[j]) {
        F[i] = Math.max(F[i], F[j] + 1);
      }
    }
  }
  return Math.max(...F);
}

module.exports = { jumper, jumper_min, king, subsequence, g_subsequence };
