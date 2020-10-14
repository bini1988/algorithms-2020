
/**
 * Рекурсивный обход в глубину
 * @param {Array<Array<number>>} G Граф заданный вектором смежности
 * @param {number} vertex Вершина с которой начинается обход
 * @param {Array<number>} [used] Состояние посещенных вершин
 * @param {Array<number>} [path] Порядок обхода вершин
 * @returns {void}
 */
function dfs(G, vertex, used = [], path = []) {
  used[vertex] = true;

  for (const u of G[vertex]) {
    if (!used[u]) dfs(G, u, used, path);
  }
  path.push(vertex);
}

/**
 * Алгоритм Тарьяна O(n)
 * @description Топологическая сортировка ориентированного графа без циклов. Определяет последовательность нумерацию вершин так, что любая дуга идет от вершины с меньшим номером к вершине с большим номером.
 * @param {Array<Array<number>>} G Граф заданный вектором смежности
 * @returns {Array<number>} Вершины графа в порядке обхода
 */
function tarjan(G) {
  let used = [];
  let path = [];

  for(let u = 0; u < G.length; u++) {
    if (!used[u]) dfs(G, u, used, path);
  }
  return path.reverse();
}

module.exports = { tarjan };
