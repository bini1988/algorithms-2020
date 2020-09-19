
/**
 * Вернуть rank цифру переданного числа
 * @param {number} N Число
 * @param {number} rank Номер разряда
 */
function nthDigit(N, rank = 0) {
  return ~~(N / 10**rank) % 10;
}

/**
 * Отсортировать элементы массива по указаному разряду
 * @param {Array<any>} arr Массив элементов
 * @param {number} rank Номер разряда
 */
function sortByRank(arr, rank = 0) {
  const N = arr.length;
  const out = new Array(N);
  const tmp = new Array(10);

  let isOutOfMaxRank = true;

  for (let i = 0; i < N; i++) {
    const k = nthDigit(arr[i], rank);

    isOutOfMaxRank = isOutOfMaxRank && (k == 0);
    tmp[k] = tmp[k] || 0;
    tmp[k]++;
  }

  if (isOutOfMaxRank) return arr;

  for (let i = 1; i < tmp.length; i++) {
    tmp[i] = (tmp[i - 1] || 0) + (tmp[i] || 0);
  }
  for (let i = N - 1; i >= 0; i--) {
    const k = nthDigit(arr[i], rank);

    out[--tmp[k]] = arr[i];
  }
  return out;
}

/**
 * Отсортировать элементы массива
 * @param {Array<any>} arr Массив элементов
 */
function sort(arr) {
  let out = arr;
  let rank = 0;

  do {
    arr = out;
    out = sortByRank(arr, rank++);
  } while (out !== arr);

  return out;
}

module.exports = sort;
