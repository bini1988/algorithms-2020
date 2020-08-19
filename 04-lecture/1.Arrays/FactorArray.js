
class FactorArray {
  /**
   * @param {number} capacity Исходный размер выделямой колекции
   */
  constructor(capacity = 10) {
    /**
     * @type {Array<any>}
     */
    this.arr = new Array(capacity);
    /**
     * @type {number}
     */
    this.size = 0;
  }

  /**
   * Является ли массив пустым
   */
  get isEmpty() {
    return this.size === 0;
  }

  /**
   * Инициализировать коллекцию исходным массивом
   * @param {Array<any>} arr
   */
  from(arr) {
    this.arr = arr;
    this.size = arr.length;
  }

  /**
   * Возвращает элемент по индексу
   * @param {number} index Индекс элемента
   */
  by(index) {
    return this.arr[index];
  }

  /**
   * Добавляет элемент по заданному индексу
   * @param {any} item Добавляемый элемент
   * @param {number} index Индекс вставки элемента
   */
  add(item, index = this.size) {
    let pos = Math.min(index, this.size);
    let src = this.arr;

    if (this.size === this.arr.length) {
      src = new Array(this.size * 2 + 1);

      for (let i = 0; i < this.size; i++) {
        src[i] = this.arr[i];
      }
    }
    for (let i = this.size; i > pos; i--) {
      src[i] = this.arr[i - 1];
    }
    src[pos] = item;

    this.arr = src;
    this.size++;
  }

  /**
   * Удаляет элемент по заданному индексу
   * @param {number} index Индекс удаляемого элемента
   */
  remove(index = -1) {
    const pos = (index === -1)
      ? this.size - 1 : Math.min(index, this.size);

    let item = this.arr[pos];

    for (let i = pos; i < this.size - 1; i++) {
      this.arr[i] = this.arr[i + 1];
    }

    this.size--;
    return item;
  }

  /**
   * Возваращает копию массива элементов
   * @returns {any[]}
   */
  toArray() {
    const out = new Array(this.size);

    for (let i = 0; i < this.size; i++) {
      out[i] = this.arr[i];
    }
    return out;
  }
}

module.exports = FactorArray;
