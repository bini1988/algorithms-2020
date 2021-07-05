
/**
 * Алгоритм Прима
 * @description Нахождения минимального остовного дерева (имеющее минимальную сумму весов входящих в него рёбер)
 * @param {Array<Array<number>>} G Граф заданный вектором смежности
 * @returns {Array<{v1: number; v2: number}>} Список ребер заданных парой вершин
 */
function prim(G) {
  const vertices = [0];
  const used = [true];
  const edges = [];

  while (vertices.length < G.length) {
    let min_v1 = null;
    let min_v2 = null;
    let min_w = Infinity;

    for (const v of vertices) {
      for (const [u_v, u_w] of G[v]) {
        if (!used[u_v] && u_w < min_w) {
          min_v1 = v;
          min_v2 = u_v;
          min_w = u_w;
        }
      }
    }

    used[min_v2] = true;
    vertices.push(min_v2);
    edges.push({ v1: min_v1, v2: min_v2 });
  }

  return edges;
}

module.exports = { prim };
