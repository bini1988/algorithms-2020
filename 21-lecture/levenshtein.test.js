const assert = require("assert");
const { levenshtein } = require("./levenshtein");

describe("Расстояние Левенштейна", function () {
  it("'колокол' & 'молоко'", function () {
    assert.strictEqual(levenshtein('колокол', 'молоко'), 2);
  });
  it("'арестант' & 'дагестан'", function () {
    assert.strictEqual(levenshtein('арестант', 'дагестан'), 3);
  });
});
