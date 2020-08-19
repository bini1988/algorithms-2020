
class MatrixArray {
  constructor() {
    this.size = 0;
    this.amount = 15;
    /**
     * @type {Array<Array<any>>}
     */
    this.box = [[]];
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
    const capacity = Math.ceil(arr.length / this.amount);

    this.box = new Array(capacity);
    this.size = arr.length;

    for (let i = 0; i < capacity; i++) {
      const fromIndex = this.amount * i;
      const toIndex = fromIndex + this.amount;

      this.box[i] = arr.slice(fromIndex, toIndex);
    }
  }

  /**
   * Возвращает номер массива и индекс элемента в данном массиве
   * @param {number} index Индекс элемента
   */
  indexesOf(index) {
    return [~~(index / this.amount), index % this.amount];
  }

  /**
   * Добавляет элемент по заданному индексу
   * @param {any} item Добавляемый элемент
   * @param {number} index Индекс вставки элемента
   */
  add(item, index = this.size) {
    const pos = Math.min(index, this.size);

    if (this.size === this.box.length * this.amount) {
      this.box.push(new Array(this.amount));
    }

    let i, j1 = 0, k1 = 0, j2 = 0, k2 = 0;

    for (i = this.size; i > pos; i--) {
      [j1, k1] = this.indexesOf(i);
      [j2, k2] = this.indexesOf(i - 1);

      this.box[j1][k1] = this.box[j2][k2];
    }

    [j2, k2] = this.indexesOf(i);

    this.box[j2][k2] = item;
    this.size++;
  }

  /**
   * Удаляет элемент по заданному индексу
   * @param {number} index Индекс удаляемого элемента
   */
  remove(index = -1) {
    const pos = (index === -1)
      ? this.size - 1 : Math.min(index, this.size);

    let [j1, k1] = this.indexesOf(pos);
    let item = this.box[j1][k1];

    for (let i = pos; i < this.size - 1; i++) {
      let [j2, k2] = this.indexesOf(i + 1);

      this.box[j1][k1] = this.box[j2][k2];
      [j1, k1] = [j2, k2];
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
      let [j, k] = this.indexesOf(i);

      out[i] = this.box[j][k];
    }
    return out;
  }
}

module.exports = MatrixArray;
