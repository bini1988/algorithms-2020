
/**
 * Вернуть списко ребер минимального пути до заданной вершины
 * @param {Array<number>} V Вектор переходов
 * @param {number} v2 До какой вершины ищется кратчайший пути
 * @returns {Array<{v1: number; v2: number}>} Список ребер заданных парой вершин
 */
function pathTo(V, v2 = 0) {
  let path = [];
  let v1 = V[v2];

  while(v1 !== null) {
    path.push({ v1, v2 });
    v2 = v1;
    v1 = V[v2];
  }

  return path.reverse();
}

/**
 * Алгоритм Дейкстры
 * @description Нахождение кратчайшего пути во взвешенном графе
 * @param {Array<Array<number>>} G Граф заданный вектором смежности
 * @param {number} v_s От какой вершины ищется кратчайший пути
 * @param {number} v_e До какой вершины ищется кратчайший пути
 * @returns {Array<{v1: number; v2: number}>} Список ребер заданных парой вершин
 */
function dijkstra(G, v_s = 0, v_e = 0) {
  const D = G.map(_ => Infinity);
  const V = G.map(_ => null);
  const used = G.map(_ => false);

  D[v_s] = 0;
  let v1 = v_s;

  while (v1 !== null) {
    for (const [v2, w] of G[v1]) {
      if (used[v2]) continue;
      if (D[v1] + w < D[v2]) {
        D[v2] = D[v1] + w;
        V[v2] = v1;
      }
    }
    used[v1] = true;
    v1 = null;

    for (let v = 0; v < D.length; v++) {
      if (used[v]) continue;
      if (v1 === null || D[v] < D[v1]) {
        v1 = v;
      }
    }

    if (v1 === v_e) break;
  }

  return pathTo(V, v_e);
}

module.exports = { dijkstra };
