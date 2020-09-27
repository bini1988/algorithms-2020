
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
 * Односвязный список с добавлением элементов в отсортированном порядке
 */
class SortedLinkedList {
  constructor(cmp = compare) {
    this.root = null;
    this.cmp = cmp;
  }

  /**
   * Добавить значение в список
   * @param {any} value Добавляемое значение
   */
  add(value) {
    let next = this.root;
    let prev = null;

    while (next && (this.cmp(next.value, value) <= 0)) {
      prev = next;
      next = next.next;
    }
    let item = { value, next };

    if (prev) {
      prev.next = item;
    } else {
      this.root = item;
    }
  }

  /**
   * Добавить элементы в переданный/новый массив
   * @returns {any[]}
   */
  toArray(out = []) {
    let node = this.root;

    while (node) {
      out.push(node.value);
      node = node.next;
    }
    return out;
  }
}

/**
 * Отсортировать элементы массива
 * @param {Array<any>} arr Массив элементов
 * @param {Function} cmp Функция сравнения элементов массива
 */
function sort(arr, cmp = compare) {
  let N = arr.length;
  let buckets = new Array(N);
  let max = arr[0];

  for (let i = 1; i < N; i++) {
    if (compare(max, arr[i]) < 0) {
      max = arr[i]
    }
  }

  for (let i = 0; i < N; i++) {
    const value = arr[i];
    const bucketIndex = ~~((value * N) / (+max + 1));

    if (!buckets[bucketIndex]) {
      buckets[bucketIndex] = new SortedLinkedList(cmp);
    }
    buckets[bucketIndex].add(value);
  }

  const out = [];

  for (let i = 0; i < N; i++) {
    if (buckets[i]) {
      buckets[i].toArray(out);
    }
  }
  return out;
}

module.exports = sort;
