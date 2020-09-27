
/**
 * Функция сравнения
 * @param {Any} a
 * @param {Any} b
 * @returns {number} Вернет значение меньше 0 если a < b, больше 0 если a > b, равное 0 если a == b
 */
function compare(a, b) {
  return a - b;
}

/**
 * Обмен значений в массиве по заданным индексам
 * @param {Array<any>} arr Массива элементов
 * @param {number} indexA
 * @param {number} indexB
 */
function swap(arr, indexA, indexB) {
  const tmp = arr[indexA];
  arr[indexA] = arr[indexB]
  arr[indexB] = tmp;
}

/**
 * Функция Shell'a для расчета интервала между элементами O(N^2)
 * @param {number} k Номер элемента последовательности
 * @param {number} N Количество элементов в массиве
 * @returns {number}
 */
function termShell(k, N) {
  return N / Math.pow(2, ~~Math.log2(N) - k + 1);
}

/**
 * Функция Hibbard'a для расчета интервала между элементами O(N^1.5)
 * @param {number} k Номер элемента последовательности
 * @returns {number}
 */
function termHibbard(k) {
  return Math.pow(2, k) - 1;
}

/**
 * Функция Sedgewick'a для расчета интервала между элементами O(N^1.33)
 * @param {number} k Номер элемента последовательности
 * @returns {number}
 */
function termSedgewick(k) {
  if (k == 1) return 1;
  k--;
  return (k % 2)
   ? 8 * Math.pow(2, k) - 6 * Math.pow(2, (k + 1) * 0.5) + 1
   : 9 * (Math.pow(2, k) - Math.pow(2, k / 2)) + 1
}


/**
 * Функция возвращающая массив интервалов начиная с 1
 * @param {function} term Функция возвращающая k-й элемент последовательности
 * @param {number} N Максимальное число
 */
function fromTerm(term, N) {
  let out = [];
  let k = 1;
  let f = ~~term(k++, N);

  while (f <= N) {
    out.push(f);
    f = ~~term(k++, N);
  }
  return out;
}

/**
 * Отсортировать элементы массива
 * @param {Array<any>} arr Массива элементов
 * @param {Function} term Функция расчета интервала между элементами
 * @param {Function} cmp Функция сравнения элементов массива
 */
function sort(arr, term = termShell, cmp = compare) {
  const N = arr.length;
  const s = fromTerm(term, N);

  for (let k = s.length - 1, f = s[k]; k >= 0; f = s[--k]) {
    for (let i = f; i < N; i += f) {
      for (let j = i; j > 0; j -= f) {
        if (cmp(arr[j], arr[j - f]) > 0) break;
        swap(arr, j, j - f);
      }
    }
  }
  return arr;
}

module.exports = { termShell, termHibbard, termSedgewick, sort };
