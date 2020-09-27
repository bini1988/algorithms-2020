
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
 * @param {number} root Вершина пирамиды
 * @param {number} limit Максимальный возможный индекс (не включительно)
 * @param {Function} cmp Функция сравнения элементов массива
 */
function heapify(arr, root, limit = arr.length, cmp) {
  let k = root;
  let l = 2 * root + 1;
  let r = l + 1;

  if (l < limit && (cmp(arr[l], arr[k]) > 0)) k = l;
  if (r < limit && (cmp(arr[r], arr[k]) > 0)) k = r;
  if (k == root) return;

  swap(arr, root, k);
  heapify(arr, k, limit, cmp);
}

/**
 * Отсортировать элементы массива
 * @param {Array<any>} arr Массива элементов
 * @param {Function} cmp Функция сравнения элементов массива
 */
function sort(arr, cmp = compare) {
  const N = arr.length;

  for (let i = Math.trunc(N * 0.5 - 1); i >= 0; i--) {
    heapify(arr, i, N, cmp);
  }
  for (let i = N - 1; i > 0; i--) {
    swap(arr, 0, i);
    heapify(arr, 0, i, cmp);
  }
  return arr;
}

module.exports = sort;
