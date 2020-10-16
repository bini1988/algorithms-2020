const { list } = require("./utils");

/**
 * Вернуть компоненту к которой принадлежит вершина графа
 * @param {Array<number>} parent Массив принадлежности вершин к компонентам
 * @param {number} v Вершина графа
 * @returns {number}
 */
function find(parent, v) {
  return (parent[v] === v) ? v : find(parent, parent[v])
}

/**
 * Алгоритм Борувки
 * @description Нахождения минимального остовного дерева (имеющее минимальную сумму весов входящих в него рёбер)
 * @param {Array<Array<number>>} G Граф заданный вектором смежности
 * @returns {Array<{v1: number; v2: number}>} Список ребер заданных парой вершин
 */
function boruvka(G) {
  const edges = [];
  const parent = G.map((_, v) => v);
  const E = list(G);

  E.sort((e1, e2) => e1[2] - e2[2]);

  for (const [v1, v2] of E) {
    const c1 = find(parent, v1);
    const c2 = find(parent, v2);

    if (c1 !== c2) {
      edges.push({ v1, v2 });
      parent[c1] = c2;
    }
  }

  return edges;
}

module.exports = { boruvka };
