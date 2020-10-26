
/**
 * Проверка строк на равенство
 * @param {string} a
 * @param {string} b
 */
function equal(a = "", b = "") {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

/**
 * Наивный алгоритм поиска подстроки в строке
 * @param {string} text Исходная строка
 * @param {string} pattern Искомая подстрока
 * @returns {number}
 */
function substr(text, pattern) {
  let out = [];
  let t = 0;
  let p = 0;

  for (t = 0; t < text.length - pattern.length + 1; t++) {
    for (p = 0; p < pattern.length; p++) {
      if (text[t + p] !== pattern[p]) break;
    }
    if (p == pattern.length) {
      out.push(t);
      t += p;
    }
  }
  return out;
}

/**
 * Вычисление Z-функции
 * @description Нахождение максимальной длины последовательности от i-го символа совпадающей с последовательностью начинающейся от начала исходной строки
 * @param {string} src Исходная строка
 * @returns {number[]} Массив максимальных длин совпадающих последовательностей
 */
function zFun(src) {
  let Z = Array.from(src).fill(0);
  let N = src.length;
  let l = 0;
  let r = 0;

  Z[0] = N;

  for (let i = 1; i < N; i++) {
    if (i <= r) {
      Z[i] = Math.min(Z[i - l], r - i + 1);
    }
    while ((Z[i] + i < N) && src[Z[i]] == src[Z[i] + i]) {
      Z[i] += 1;
    }
    if (i + Z[i] - 1 > r) {
      [l, r] = [i, i + Z[i] - 1]
    }
  }
  return Z;
}

module.exports = { equal, substr, zFun };
