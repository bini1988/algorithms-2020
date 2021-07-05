
/**
 * Алгоритм Демукрона
 * @description Топологическая сортировка ориентированного графа без циклов. Определяет последовательность нумерацию вершин так, что любая дуга идет от вершины с меньшим номером к вершине с большим номером.
 * @param {Array<Array<number>>} G Граф заданный вектором смежности
 * @returns {Array<Array<number>>} Уровни с принадлежащими им вершинами графа
 */
function demucron(G) {
  let S = [];
  let levels = [];

  for(let u = 0; u < G.length; u++) {
    for(let v = 0; v < G.length; v++) {
      S[v] = S[v] ? S[v] + G[u][v] : G[u][v];
    }
  }

  let vertices = G.length;

  while (vertices) {
    let level = [];

    for(let v = 0; v < G.length; v++) {
      if (S[v] === 0) {
        S[v] = -1;
        level.push(v);
        vertices--;
      }
    }
    for(let u = 0; u < level.length; u++) {
      for(let v = 0; v < G.length; v++) {
        S[v] = (S[v] > 0) ? S[v] - G[level[u]][v] : S[v];
      }
    }
    levels.push(level);
  }

  return levels;
}

module.exports = { demucron };
