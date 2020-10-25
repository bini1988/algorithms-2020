
/**
 * Вычисление префикс функции
 * @description Нахождение длины максимального собственного суффикса строки совпадающего с префиксом
 * @param {string} src Исходная строка
 * @returns {number[]} Массив максимальных длин суффиксов для подстроки заданной длины
 */
function prefixFun(src) {
  let P = [0];

  for (let i = 0; i < src.length - 1; i++) {
    let j = P[i];

    while (j > 0 && src[i + 1] !== src[j]) {
      j = P[j - 1];
    }
    if (src[i + 1] == src[j]) {
      P[i + 1] = j + 1;
    } else {
      P[i + 1] = 0;
    }
  }
  return P;
}

module.exports = { prefixFun };
