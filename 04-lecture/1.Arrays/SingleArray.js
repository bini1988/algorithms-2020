
class SingleArray {
  constructor() {
    /**
     * @type {Array<any>}
     */
    this.arr = new Array(0);
  }

  /**
   * Размер массива
   */
  get size() {
    return this.arr.length;
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
  }

  /**
   * Добавляет элемент по заданному индексу
   * @param {any} item Добавляемый элемент
   * @param {number} index Индекс вставки элемента
   */
  add(item, index = this.size) {
    const pos = Math.min(index, this.size);
    const src = new Array(this.size + 1);

    for (let i = 0; i < this.size; i++) {
      src[i] = this.arr[i];
    }
    for (let i = this.size; i > pos; i--) {
      src[i] = this.arr[i - 1];
    }
    src[pos] = item;

    this.arr = src;
  }

  /**
   * Удаляет элемент по заданному индексу
   * @param {number} index Индекс удаляемого элемента
   */
  remove(index = -1) {
    const pos = (index === -1)
      ? this.size - 1 : Math.min(index, this.size);

    const src = new Array(this.size - 1);
    const item = this.arr[pos];

    for (let i = 0; i < src.length; i++) {
      src[i] = this.arr[i + Number(i >= pos)];
    }

    this.arr = src;
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

module.exports = SingleArray;
