
/**
 * Переводит набор вершин из числового в буквенное обозначение
 * @param {number[]} vertices Массив вершин
 */
function lettering(vertices, startChar = "A") {
  const startCode = startChar.charCodeAt(0);

  return vertices.map(i => String.fromCharCode(startCode + i))
}


/**
 * Возвращает список рёбер графа
 * @param {Array<Array<number|[number, number]>>} G Граф заданный вектором смежности
 * @returns {Array<[number, number, number]>}
 */
function list(G) {
  const out = [];

  for(let u = 0; u < G.length; u++) {
    for (let v of G[u]) {
      let w = undefined;

      [v, w] = Array.isArray(v) ? v : [v];

      if (v > u) {
        out.push([u, v, w]);
      }
    }
  }
  out.sort((e1, e2) => e1[2] - e2[2]);

  return out;
}

module.exports = { lettering, list };
