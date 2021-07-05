
/**
 * Стек
 */
class Stack {
  /**
   * @param {number} capacity Исходный размер выделямой колекции
   */
  constructor (capacity = 10) {
    this._stack = new Array(capacity);
    this._size = 0;
  }

  /**
   * Количество элементов в стеке
   * @returns {number}
   */
  get size() {
    return this._size;
  }

  /**
   * Поместить элемент в стек
   * @param {any} value
   * @returns {void}
   */
  push(value) {
    let stack = this._stack;
    let size = this._size;

    if (stack.length === size) {
      stack = new Array(size * 2 + 1);

      for (let i = 0; i < size; i++) {
        stack[i] = this._stack[i];
      }
    }

    this._stack = stack;
    this._stack[this._size++] = value;
  }

  /**
   * Извлечь элемент из стека
   * @returns {any}
   */
  pop() {
    return this._size > 0
      ? this._stack[--this._size] : undefined;
  }

  /**
   * Вернуть элемент с вершины стека
   * @returns {any}
   */
  head() {
    return this._stack[this._size - 1];
  }
}

module.exports = Stack;
