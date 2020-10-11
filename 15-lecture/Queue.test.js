const assert = require("assert");
const Queue = require("./Queue");

describe("Queue", function () {
  it("Создание пустой очереди", function () {
    const queue = new Queue();

    assert.deepStrictEqual(queue.size, 0);
  });

  it("Добавление/удаление элементов из очереди", function () {
    const queue = new Queue();
    const input = Array.from({ length: 50 }).map((_, index) => index);

    for (let i = 0; i < input.length; i++) {
      queue.enqueue(input[i]);
    }
    assert.deepStrictEqual(queue.size, input.length);

    for (let i = 0; i < input.length; i++) {
      assert.deepStrictEqual(queue.dequeue(), i);
    }
    assert.deepStrictEqual(queue.size, 0);
  });
});
