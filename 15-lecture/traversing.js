const Stack = require("./Stack");
const Queue = require("./Queue");

/**
 * Рекурсивный обход в глубину
 * @param {Array<Array<number>>} G Граф заданный вектором смежности
 * @param {number} vertex Вершина с которой начинается обход
 * @param {Array<number>} [used] Состояние посещенных вершин
 * @param {Array<number>} [path] Порядок обхода вершин
 * @returns {void}
 */
function dfs_r(G, vertex, used = [], path = []) {
  used[vertex] = true;
  path.push(vertex);

  for (const u of G[vertex]) {
    if (!used[u]) dfs_r(G, u, used, path);
  }
}

/**
 * Обход в глубину
 * @param {Array<Array<number>>} G Граф заданный вектором смежности
 * @param {number} vertex Вершина с которой начинается обход
 * @param {Array<number>} [used] Состояние посещенных вершин
 * @param {Array<number>} [path] Порядок обхода вершин
 * @returns {void}
 */
function dfs(G, vertex, used = [], path = []) {
  const stack = new Stack();

  stack.push(vertex);

  while (stack.size > 0) {
    const v = stack.pop();

    if (used[v]) continue;

    used[v] = true;
    path.push(v);

    for (let u = G[v].length; u; u--) {
      if (!used[G[v][u - 1]]) stack.push(G[v][u - 1]);
    }
  }
}

/**
 * Обход в ширину
 * @param {Array<Array<number>>} G Граф заданный вектором смежности
 * @param {number} vertex Вершина с которой начинается обход
 * @param {Array<number>} [used] Состояние посещенных вершин
 * @param {Array<number>} [path] Порядок обхода вершин
 * @returns {void}
 */
function bfs(G, vertex, used = [], path = []) {
  const queue = new Queue();

  queue.enqueue(vertex);

  while (queue.size > 0) {
    const v = queue.dequeue();

    if (used[v]) continue;

    used[v] = true;
    path.push(v);

    for (let u = G[v].length; u; u--) {
      if (!used[G[v][u - 1]]) queue.enqueue(G[v][u - 1]);
    }
  }
}

module.exports = { dfs_r, dfs, bfs };
