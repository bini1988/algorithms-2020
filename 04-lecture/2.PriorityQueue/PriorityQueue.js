const FactorArray = require("../1.Arrays/FactorArray");

/**
 * Очередь с приоритетами
 */
class PriorityQueue {
  constructor() {
    this.arr = new FactorArray();
  }

  /**
   * Размер очереди
   */
  get size() {
    return this.arr.size;
  }

  /**
   * Является ли очередь пустой
   */
  get isEmpty() {
    return this.arr.isEmpty;
  }

  /**
   * Добавить элемент в очередь
   * @param {any} item Добавляемый элемент
   * @param {number} priority Приоритет элемента (от 0, чем меньше тем выше)
   */
  enqueue(item, priority = 0) {
    let index = 0;

    for(index = 0; index < this.size; index++) {
      if (this.arr.by(index)[0] > priority) break;
    }
    this.arr.add([priority, item], index);
  }

  /**
   * Вернуть элемент из начала очередеи
   * @returns {any}
   */
  dequeue() {
    const [priority, item] = this.arr.remove(0);
    return item;
  }

  /**
   * Возваращает копию массива элементов
   * @returns {any[]}
   */
  toArray() {
    const out = new Array(this.size);

    for (let index = 0; index < this.size; index++) {
      out[index] = this.arr.by(index);
    }
    return out;
  }
}

module.exports = PriorityQueue;
