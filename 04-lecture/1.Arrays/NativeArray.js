/**
 * Реализация массива на основе втроенного типа Array
 */
class NativeArray {
  constructor() {
    /**
     * @type {Array<any>}
     */
    this.arr = [];
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
    this.arr.splice(index, 0, item);
  }

  /**
   * Удаляет элемент по заданному индексу
   * @param {number} index Индекс удаляемого элемента
   */
  remove(index = -1) {
    const [item] = this.arr.splice(index, 1);
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

module.exports = NativeArray;
