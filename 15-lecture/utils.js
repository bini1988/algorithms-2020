
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
    for (let v_w of G[u]) {
      let [v, w] = Array.isArray(v_w) ? v_w : [v_w];

      if (v > u) {
        out.push([u, v, w]);
      }
    }
  }

  return out;
}

/**
 * Возвращает матрицу смежности графа
 * @param {Array<Array<number|[number, number]>>} G Граф заданный вектором смежности
 * @returns {Array<Array<number>>}
 */
function matrix(G) {
  const N = G.length;
  const M = [];

  for(let u = 0; u < N; u++) {
    M[u] = Array.from({ length: N }).fill(Infinity);

    for (let v_w of G[u]) {
      let [v, w = 1] = Array.isArray(v_w) ? v_w : [v_w];

      M[u][v] = w;
    }
  }
  return M;
}

module.exports = { lettering, list, matrix };
