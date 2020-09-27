
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
 * @param {Array<any>} arr Массива элементов
 * @param {number} from
 * @param {number} to
 * @param {function} cmp
 */
function partition(arr, from, to, cmp) {
  let pivot = arr[to];
  let j = from - 1;

  for (let i = from; i <= to; i++) {
    if (cmp(arr[i], pivot) <= 0) swap(arr, ++j, i);
  }
  return j;
}

/**
 * @param {Array<any>} arr Массива элементов
 * @param {number} from
 * @param {number} to
 * @param {function} cmp
 */
function sortPart(arr, from, to, cmp) {
  if (from >= to) return arr;

  let bound = partition(arr, from, to, cmp);

  sortPart(arr, from, bound - 1, cmp);
  sortPart(arr, bound + 1, to, cmp);

  return arr;
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
