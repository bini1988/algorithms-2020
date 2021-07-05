const { list, pathTo } = require("./utils");

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
  const D = G.map(_ => Infinity);
  const V = G.map(_ => null);
  const E = list(G);

  D[v_s] = 0;

  for (let i = 0; i < N; i++) {
    for (const [v1, v2, w] of E) {
      if (D[v1] < Infinity) {
        if (D[v1] + w < D[v2]) {
          D[v2] = D[v1] + w;
          V[v2] = v1;
        }
      }
    }
  }

  return pathTo(V, v_e);
}

module.exports = { bellmanFord };
