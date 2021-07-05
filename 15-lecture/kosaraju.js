const { dfs_r } = require("./traversing");

/**
 * Возвращает граф с измененными на противоположное направлениями дуг
 * @param {Array<Array<number>>} G Граф заданный вектором смежности
 */
function reverse(G) {
  const H = [];

  for(let u = 0; u < G.length; u++) {
    H[u] = H[u] || [];

    for(let v of G[u]) {
      H[v] = H[v] || [];
      H[v].push(u);
    }
  }
  return H;
}


/**
 * Алгоритм Косарайю
 * @description Выделение компонент сильной связности ориентированного графа
 * @param {Array<Array<number>>} G Граф заданный вектором смежности
 * @returns {Array<number>} Вершины графа с индексом компоненты к который они относятся
 */
function kosaraju(G) {
  let H = reverse(G);
  let used = [];
  let path = [];

  for(let u = 0; u < H.length; u++) {
    if (!used[u]) dfs_r(H, u, used, path);
  }

  let C = [];
  let c_i = 0;
  used = [];

  for (let v of path) {
    let c_path = [];

    if (!used[v]) {
      dfs_r(H, v, used, c_path);

      for (let u of c_path) {
        C[u] = c_i;
      }
      c_i++;
    }
  }

  return C;
}

module.exports = { reverse, kosaraju };
