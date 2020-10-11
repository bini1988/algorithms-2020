const assert = require("assert");
const Stack = require("./Stack");

describe("Stack", function () {
  it("Создание пустого стека", function () {
    const stack = new Stack();

    assert.deepStrictEqual(stack.size, 0);
  });

  it("Добавление/удаление элементов в стек", function () {
    const stack = new Stack();
    const input = Array.from({ length: 50 }).map((_, index) => index);

    for (let i = 0; i < input.length; i++) {
      stack.push(input[i]);
    }
    assert.deepStrictEqual(stack.size, input.length);

    for (let i = input.length - 1; i >= 0; i--) {
      assert.deepStrictEqual(stack.pop(), i);
    }
    assert.deepStrictEqual(stack.size, 0);
  });
});
