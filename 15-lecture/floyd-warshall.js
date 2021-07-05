const { matrix } = require("./utils");

/**
 * Алгоритм Флойда — Уоршелла
 * @description Нахождение кратчайших расстояний между всеми вершинами взвешенного ориентированного графа.
 * @param {Array<Array<number>>} G Граф заданный вектором смежности
 * @returns {Array<{v1: number; v2: number}>} Список ребер заданных парой вершин
 */
function floydWarshall(G) {
  const N = G.length;
  const D = matrix(G);

  for (let k = 0; k < N; k++) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        D[i][j] = Math.min(D[i][j], D[i][k] + D[k][j]);
      }
    }
  }

  return D;
}

module.exports = { floydWarshall };
