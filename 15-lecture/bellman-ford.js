const { list } = require("./utils");

/**
 * Вернуть списко ребер минимального пути до заданной вершины
 * @param {Array<[number, number]>} D Таблица переходов
 * @param {number} v2 До какой вершины ищется кратчайший пути
 * @returns {Array<{v1: number; v2: number}>} Список ребер заданных парой вершин
 */
function pathTo(D, v2 = 0) {
  let path = [];
  let [w, v1] = D[v2];

  while(v1 !== null) {
    path.push({ v1, v2 });
    v2 = v1;
    [w, v1] = D[v2];
  }

  return path.reverse();
}

/**
 * Алгоритм Беллмана — Форда
 * @description Нахождение кратчайшего пути во взвешенном ориентированном графе
 * @param {Array<Array<number>>} G Граф заданный вектором смежности
 * @param {number} v_s От какой вершины ищется кратчайший пути
 * @param {number} v_e До какой вершины ищется кратчайший пути
 * @returns {Array<{v1: number; v2: number}>} Список ребер заданных парой вершин
 */
function bellmanFord(G, v_s = 0, v_e = 0) {
  const N = G.length;
  const D = G.map(_ => [Infinity, null]);
  const E = list(G);

  D[v_s] = [0, null];

  for (let i = 0; i < N; i++) {
    for (const [v1, v2, w] of E) {
      if (D[v1][0] < Infinity) {
        if (D[v1][0] + w < D[v2][0]) {
          D[v2] = [D[v1][0] + w, v1];
        }
      }
    }
  }

  return pathTo(D, v_e);
}

module.exports = { bellmanFord };
