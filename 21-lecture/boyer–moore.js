const { zFun } = require("./utils");

/**
 * Вычисление таблицы суффиксов для заданной строки
 * @param {string} pattern Искомая подстрока
 */
function suff(pattern) {
  let N = pattern.length;
  let S = Array.from({ length: N + 1 }).fill(N);
  let Z = zFun(pattern);

  for (let i = N - 1; i > 0; i--) {
    S[N - Z[i]] = i;
  }
  for (let i = 1, r = 0; i <= N - 1; i++) {
    if (i + Z[i] === N) {
      for (; r <= i; r++) {
        if (S[r] === N) S[r] = i;
      }
    }
  }

  return S;
}

/**
 * Алгоритм Бойера — Мура поиска подстроки в строке
 * @param {string} text Исходная строка
 * @param {string} pattern Искомая подстрока
 * @returns {number}
 */
function substr(text, pattern) {
  let out = [];
  let t = 0;
  let p = 0;
  let p_len = pattern.length;
  let p_end = p_len - 1;

  // 1. Эвристика стоп-символа
  let shift = {};

  for (p = 0; p < p_end; p++) {
    // Для всех остальных символов принимаем -1
    shift[pattern[p]] = p_end - p;
  }

  // 2. Эвристика совпавшего суффикса
  let shift_suff = suff(pattern);

  while (t < text.length - p_end) {
    for (p = p_end; p >= 0; p--) {
      if (text[t + p] !== pattern[p]) break;
    }
    if (p == -1) {
      out.push(t);
    }
    t += Math.max(
      shift[text[t + p_end]] || p_len,
      shift_suff[p + 1]
    );
  }
  return out;
}

module.exports = { substr, suff };
