
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
 * @description Kn = Cn + min(Sn-1, Sn-2)
 * @param {number} N Конечная клетка
 * @param {number[]} [price] Цена посещения клетки
 * @returns {number}
 */
function jumper_min(N, price = []) {
  // C[i] минимальная стоимость достижения клетки i
  const C = [];
  const P = [0];

  C[0] = 0;
  C[1] = price[1];
  P[1] = 0;

  for (let i = 2; i < N + 1; i++) {
    if (C[i - 1] < C[i - 1]) {
      C[i] = price[i] + C[i - 1];
      P[i] = i - 1;
    } else {
      C[i] = price[i] + C[i - 2];
      P[i] = i - 2;
    }
  }

  const path = [];
  let i = N;

  while (i > 0) {
    path.push(i)
    i = P[i]
  }
  path.push(0)

  // return C[N];
  return path.reverse();
}

/**
 * Шахматный король на поле MxN находится в ячейке [1,1], сколько способов добраться до клетки [N,M] шагая только вправо или вниз или по диагонали вправо
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
  K[0][0] = 1;

  for (let i = 1; i < N + 1; i++) {
    for (let j = 1; j < M + 1; j++) {
      K[i][j] = K[i - 1][j] + K[i][j - 1] + K[i - 1][j - 1];
    }
  }
  return K[N][M];
}

function king_min(N, M, price = []) {
  // K[i][j] количество способов достичь клетки [i,j]
  const K = [];

  for (let i = 0; i < N + 1; i++) {
    K[i] = K[i] || [Infinity];
  }
  for (let j = 0; j < M + 1; j++) {
    K[0][j] = Infinity;
  }
  K[0][0] = 0;

  for (let i = 1; i < N + 1; i++) {
    for (let j = 1; j < M + 1; j++) {
      K[i][j] = price[i][j] + Math.min(K[i - 1][j], K[i][j - 1], K[i - 1][j - 1]);
    }
  }

  const path = [];
  let i = N;
  let j = M;

  while (i !== 0 && j !== 0) {
    path.push([i, j]);

    const prev_K = Math.min(K[i - 1][j], K[i][j - 1], K[i - 1][j - 1]);

    if (K[i - 1][j] === prev_K) {
      [i, j] = [i - 1][j];
    } else if (K[i][j - 1] === prev_K) {
      [i, j] = [i][j - 1];
    } else {
      [i, j] = [i - 1][j - 1];
    }
  }

  // return K[N][M];
  return path.reverse();
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

  let arr = [];
  let i = N;
  let j = M;

  while (i > 0 && j > 0) {
    if (A[i - 1] === B[j - 1]) {
      arr.push(A[i - 1]);
      [i, j] = [i - 1, j - 1];
    } else if (F[i][j - 1] > F[i - 1][j]) {
      [i, j] = [i, j - 1];
    } else {
      [i, j] = [i - 1, j];
    }
  }

  return arr.reverse();
  // return F[N][M];
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

/**
 * Вычислить редакционное расстояние между строками (расстояние Левенштейна)
 * @description Посчитать количество ошибко исправление которых приводит к преобразованию одной стоки в другую. Ошибками могут быть: перепутали сомвол, вставили лишний, потеряли нужный.
 * @param {string} a
 * @param {string} b
 */
function levenshtein(a, b) {
  const F = [];

  for (let i = 0; i <= a.length; i++) {
    F[i] = F[i] || [];

    for (let j = 0; j <= b.length; j++) {
      F[i][j] = i && j ? 0 : i + j;
    }
  }

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++)  {
      if (a[i - 1] === b[j - 1]) {
        F[i][j] = F[i - 1][j - 1];
      } else {
        F[i][j] = 1 + Math.min(F[i - 1][j], F[i][j - 1], F[i - 1][j - 1]);
      }
    }
  }

  return F[a.length][b.length];
}

/**
 * Задача об укладке рюкзака
 * @description Есть набор предметов с заданными массой M[0][j] и стоимостью C[0][N], необходимо наполнить рюкзак предметами получив максимальную стоимость
 * a[i][w] = max(C[i] + a[i-1][w-M[i]], a[i-1][w])
 * i - количество предметов [0, N]
 * w - масса [0, M]
 * @param {number[]} W Вес каждого из предметов
 * @param {number[]} P Стоимость каждого из предметов
 * @param {number} K максимальная масса рюкзака
 */
function bag(W, P, K) {
  // F[i][k] - максимальная стоимость предметов, которые можно уложить в рюкзак массы k, если можно использовать только первые i предметов.
  const F = [];
  const N = W.length;

  for (let i = 0; i < N + 1; i++) {
    F[i] = F[i] || [];

    for (let k = 0; k < K + 1; k++) {
      F[i][j] = 0;
    }
  }

  for (let i = 1; i < N + 1; i++) {
    for (let k = 0; k < K + 1; k++) {
      if (k >= W[i]) {
        F[i][k] = Math.max(F[i - 1][k], F[i - 1][k - W[i]] + P[i]);
      } else {
        F[i][k] = F[i - 1][k];
      }
    }
  }

  let out = [];
  let k = K;

  for (let i = N; i >= 0; i--) {
    if (F[i][k] !== F[i - 1][k]) {
      out.push(i);
    }
    k -= W[i];
  }

  return out;
}

/**
 * В банкомате имеется банкноты различных номиналов. Клиент хочет получить сумму в K денежных единиц. Необходимо определить, при помощи какого минимального числа банкнот можно выдать эту сумму (а при необходимости восстановления ответа - определить способ выдачи, использующий минимальное число банкнот).
 */
function atm(A, K) {
  // F(k) - минимальное число банкнот при помощи которых можно выдать сумму в k рублей
  // F(k) = 1 + min F(k - A[i])
  const F = Array.from({ length: K + 1 }).fill(Infinity);

  F[0] = 0;

  for (let k = 1; k < K + 1; k++) {
    for (let i = 0; i < A.length; i++) {
      if (k - A[i] >= 0 && F[k - A[i]] < F[k]) {
        F[k] = F[k - A[i]]
      }
    }
    F[k] += 1
  }

  let out = [];
  let k = K;

  while (k !== 0) {
    for (let i = 0; i < A.length; i++) {
      if (k - A[i] >= 0 && F[k] === F[k - A[i]] + 1) {
        out.push(A[i]);
        k -= A[i];
      }
    }
  }

  return out;
}

module.exports = { jumper, jumper_min, king, subsequence, g_subsequence, levenshtein, bag, atm };
