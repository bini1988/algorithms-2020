
/**
 * Алгоритм Бойера — Мура — Хорспула поиска подстроки в строке
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
  let offset = {};

  for (p = 0; p < p_end; p++) {
    offset[pattern[p]] = p_end - p;
  }

  while (t < text.length - p_end) {
    for (p = p_end; p >= 0; p--) {
      if (text[t + p] !== pattern[p]) break;
    }
    if (p == -1) {
      out.push(t);
    }
    if (text[t + p_end] in offset) {
      t += offset[text[t + p_end]];
    } else {
      t += p_len;
    }
  }
  return out;
}

module.exports = { substr };
