
/**
 * Вычислить редакционное расстояние между строками (расстояние Левенштейна)
 * @description Посчитать количество ошибко исправление которых приводит к преобразованию одной стоки в другую. Ошибками могут быть: перепутали сомвол, вставили лишний, потеряли нужный.
 * @param {string} a
 * @param {string} b
 */
function levenshtein(a, b) {
  const F = [];

  for (let i = 0; i <= a.length; i++) {
    F[i] = F[i] || [];

    for (let j = 0; j <= b.length; j++) {
      F[i][j] = i && j ? 0 : i + j;
    }
  }

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1] === b[j - 1]) {
        F[i][j] = F[i - 1][j - 1];
      } else {
        F[i][j] = 1 + Math.min(F[i - 1][j], F[i][j - 1], F[i - 1][j - 1]);
      }
    }
  }

  return F[a.length][b.length];
}


module.exports = { levenshtein };
