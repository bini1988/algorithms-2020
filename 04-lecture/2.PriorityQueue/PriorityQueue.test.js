const assert = require("assert");
const PriorityQueue = require("./PriorityQueue");

describe("PriorityQueue", function () {
  it("Создание пустой очереди", function () {
    const queue = new PriorityQueue();

    assert.equal(queue.isEmpty, true);
    assert.equal(queue.size, 0);
    assert.deepStrictEqual(queue.toArray(), []);
  });

  it("Добавить элементы в очередь", function () {
    const queue = new PriorityQueue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    assert.equal(queue.isEmpty, false);
    assert.equal(queue.size, 3);
    assert.deepStrictEqual(queue.toArray(), [[0, 1], [0, 2], [0, 3]]);
  });

  it("Добавить элементы с разными приоритетами в пустую очередь", function () {
    const items = [[0, 1], [0, 2], [1, 3], [2, 4], [2, 5], [4, 6]];
    const queue = new PriorityQueue();

    for (let index = 0; index < items.length; index++) {
      const [priority, item] = items[index];

      queue.enqueue(item, priority);
    }

    assert.equal(queue.isEmpty, false);
    assert.equal(queue.size, items.length);
    assert.deepStrictEqual(queue.toArray(), items);
  });

  it("Добавить элементы с разными приоритетами в очередь", function () {
    const items = [[0, 1], [1, 2], [2, 3], [3, 4]];
    const queue = new PriorityQueue();

    for (let index = 0; index < items.length; index++) {
      const [priority, item] = items[index];
      queue.enqueue(item, priority);
    }

    queue.enqueue(11, 1);
    queue.enqueue(22, 10);
    queue.enqueue(33, 0);
    queue.enqueue(44, 0);

    assert.equal(queue.isEmpty, false);
    assert.equal(queue.size, items.length + 4);
    assert.deepStrictEqual(queue.toArray(), [
      [0, 1], [0, 33], [0, 44], [1, 2], [1, 11], [2, 3], [3, 4], [10, 22]
    ]);
  });

  it("Выбрать элементы из очереди", function () {
    const items = [[0, 1], [1, 2], [2, 3], [3, 4]];
    const queue = new PriorityQueue();

    for (let index = 0; index < items.length; index++) {
      const [priority, item] = items[index];
      queue.enqueue(item, priority);
    }

    queue.enqueue(22, 1);

    assert.equal(queue.isEmpty, false);
    assert.equal(queue.size, items.length + 1);
    assert.equal(queue.dequeue(), 1);
    assert.equal(queue.dequeue(), 2);
    assert.equal(queue.dequeue(), 22);
    assert.equal(queue.dequeue(), 3);
    assert.equal(queue.dequeue(), 4);
  });
});
