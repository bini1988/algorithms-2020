const Stack = require("./Stack");

/**
 * Рекурсивный поиск в глубину
 * @param {Array<Array<number>>} graph Граф заданный вектором смежности
 * @param {number} vertex Искомая вершина
 * @param {number} [from] Вершина с которой начинается поиск
 * @returns {[boolean, Array<number>]} True если вершина найдена, путь к найденной вершине
 */
function dfs_r(graph, vertex, from = 0) {
  const used = Array(graph.length);
  const path = [];

  /**
   * @param {number} v
   * @returns {boolean}
   */
  function find(v) {
    used[v] = true;
    path.push(v);

    if (v === vertex) {
      return true;
    }
    for (const u of graph[v]) {
      if (!used[u] && find(u)) {
        return true;
      }
    }
    path.pop();

    return false;
  }
  return [find(from), path];
}


/**
 * Поиск в глубину
 * @param {Array<Array<number>>} graph Граф заданный вектором смежности
 * @param {number} vertex Искомая вершина
 * @param {number} [from] Вершина с которой начинается поиск
 * @returns {[boolean, Array<number>]} True если вершина найдена, путь к найденной вершине
 */
function dfs(graph, vertex, from = 0) {
  const used = Array(graph.length);
  const stack = new Stack();
  const path = [];

  stack.push(from);

  while (stack.size > 0) {
    const v = stack.pop();

    if (v === vertex) {
      return [true, path];
    } else if (!used[v]) {
      used[v] = true;

      for (let i = graph[v].length; i; i--) {
        const u = graph[v][i - 1];

        if (!used[u]) stack.push(u);
      }
    }
  }
  return [false, path];
}

/**
 * Поиск в ширину
 * @param {Array<Array<number>>} graph Граф заданный вектором смежности
 * @param {number} vertex Искомая вершина
 * @param {number} [from] Вершина с которой начинается поиск
 * @returns {[boolean, Array<number>]} True если вершина найдена, путь к найденной вершине
 */
function bfs(graph, vertex, from = 0) {
  const N = graph.length;
  const used = Array(N);
  const path = [];

  /**
   * @param {number} v
   * @returns {boolean}
   */
  function find(v) {
    used[v] = true;
    path.push(v);

    if (v === vertex) {
      return true;
    }
    for (const u of graph[v]) {
      if (!used[u] && find(u)) {
        return true;
      }
    }
    path.pop();

    return false;
  }
  return [find(from), path];
}

module.exports = { dfs_r, dfs, bfs };
