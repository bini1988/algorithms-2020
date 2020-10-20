const assert = require("assert");
const { equal } = require("./utils");

describe("Функции над строками", function () {
  it("Равенство строк", function () {
    assert.strictEqual(equal('молоко', 'молоко'), true);
  });
  it("Строки не равны", function () {
    assert.strictEqual(equal('молоко', 'колокол'), false);
  });
});
