
/**
 * Отсортировать элементы массива
 * @param {Array<any>} arr Массив элементов
 */
function sort(arr) {
  const N = arr.length;
  const out = new Array(N);
  const tmp = [];

  for (let i = 0, k = arr[i]; i < N; k = arr[++i]) {
    tmp[k] = tmp[k] || 0;
    tmp[k]++;
  }
  for (let i = 1; i < tmp.length; i++) {
    tmp[i] = (tmp[i - 1] || 0) + (tmp[i] || 0);
  }
  for (let i = N - 1, k = arr[i]; i >= 0; k = arr[--i]) {
    out[--tmp[k]] = k;
  }
  return out;
}

module.exports = sort;
