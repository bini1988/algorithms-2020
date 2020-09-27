
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
 * @param {Array<any>} arr Массива элементов
 * @param {number} from
 * @param {number} to
 * @param {number} bound
 * @param {function} cmp
 */
function merge(arr, from, bound, to, cmp) {
  let tmp = new Array(to - from + 1);
  let i = from, j = bound + 1, k = 0;

  while (k < tmp.length) {
    while(i <= bound && (j > to || cmp(arr[i], arr[j]) <= 0))
      tmp[k++] = arr[i++];

    while(j <= to && (i > bound || cmp(arr[j], arr[i]) <= 0))
      tmp[k++] = arr[j++];
  }

  for (let f = from; f <= to; f++) {
    arr[f] = tmp[f - from];
  }
  return arr;
}

/**
 * @param {Array<any>} arr Массива элементов
 * @param {number} from
 * @param {number} to
 * @param {function} cmp
 */
function sortPart(arr, from, to, cmp) {
  if (from >= to) return arr;

  let bound = ~~((from + to) * 0.5);

  sortPart(arr, from, bound, cmp);
  sortPart(arr, bound + 1, to, cmp);

  return merge(arr, from, bound, to, cmp);
}


/**
 * Отсортировать элементы массива
 * @param {Array<any>} arr Массива элементов
 * @param {Function} cmp Функция сравнения элементов массива
 */
function sort(arr, cmp = compare) {
  const N = arr.length;

  return sortPart(arr, 0, N - 1, cmp);
}

module.exports = sort;
