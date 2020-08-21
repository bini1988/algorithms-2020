
/**
 * Функция сравненния
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
 * Отсортировать элементы массива
 * @param {Array<any>} arr Массива элементов
 * @param {Function} cmp Функция сравненния элементов массива
 */
function sort(arr, cmp = compare) {
  for (let i = 0, k = i; i < arr.length; i++, k = i) {

    for (let j = i + 1; j < arr.length; j++) {
      if (cmp(arr[k], arr[j]) > 0) k = j;
    }
    swap(arr, i, k);
  }
  return arr;
}

module.exports = sort;
