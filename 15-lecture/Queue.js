
/**
 * Очередь
 */
class Queue {
  /**
   * @param {number} capacity Исходный размер выделямой колекции
   */
  constructor (capacity = 10) {
    this._queue = new Array(capacity);
    this._start = 1;
    this._end = 0;
  }

  /**
   * Количество элементов в очереди
   * @returns {number}
   */
  get size() {
    return this._end - this._start + 1;
  }

  /**
   * Добавить элемент в очередь
   * @param {any} value
   * @returns {void}
   */
  enqueue(value) {
    let queue = this._queue;
    let size = this.size;

    if (queue.length === this._end) {
      queue = new Array(size * 2 + 1);

      for (let i = 0; i < size; i++) {
        queue[i] = this._queue[this._start + i];
      }
      this._start = 0;
      this._end = size - 1;
    }

    this._queue = queue;
    this._queue[++this._end] = value;
  }

  /**
   * Вернуть элемент из очереди
   * @returns {any}
   */
  dequeue() {
    return (this.size > 0)
      ? this._queue[this._start++] : undefined;
  }
}

module.exports = Queue;
