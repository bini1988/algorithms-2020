
/**
 * Переводит набор вершин из числового в буквенное обозначение
 * @param {number[]} vertices Массив вершин
 */
function lettering(vertices, startChar = "A") {
  const startCode = startChar.charCodeAt(0);

  return vertices.map(i => String.fromCharCode(startCode + i))
}

module.exports = { lettering };
