
/**
 * Рекурсивный поиск обходом в глубину
 * @param {Array<Array<number>>} G Граф заданный вектором смежности
 * @param {number} v_s Вершина с которой начинается поиск
 * @param {number} v_e Искомая вершина
 * @param {Array<number>} [used] Состояние посещенных вершин
 * @returns {boolean}
 */
function find(G, v_s, v_e, used = []) {
  used[v_s] = true;

  if (v_s === v_e) {
    return true;
  }
  for (const u of G[v_s]) {
    if (!used[u] && find(G, u, v_e, used)) {
      return true;
    };
  }
  return false;
}

/**
 * Возвращает отсортированных по весу список рёбер графа
 * @param {Array<Array<number>>} G Граф заданный вектором смежности
 * @returns {Array<[number, number, number]>}
 */
function edgesOf(G) {
  const out = [];

  for(let u = 0; u < G.length; u++) {
    for (let [v, w] of G[u]) {
      out.push([u, v, w]);
    }
  }
  out.sort((e1, e2) => e1[2] - e2[2]);

  return out;
}


/**
 * Алгоритм Краскала
 * @description Нахождения минимального остовного дерева (имеющее минимальную сумму весов входящих в него рёбер)
 * @param {Array<Array<number>>} G Граф заданный вектором смежности
 * @returns {Array<{v1: number; v2: number}>} Список ребер заданных парой вершин
 */
function kruskal(G) {
  const H = G.map(_ => []);
  const edges = [];

  for (const [v1, v2] of edgesOf(G)) {
    if (!find(H, v1, v2)) {
      H[v1].push(v2);
      H[v2].push(v1);
      edges.push({ v1, v2 });
    }
  }

  return edges;
}

module.exports = { kruskal };
