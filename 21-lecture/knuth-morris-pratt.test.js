const assert = require("assert");
const { prefixFun } = require("./knuth-morris-pratt");

describe("Алгоритм Кнута — Морриса — Пратта", function () {
  it("Перефикс функция", function () {
    assert.deepStrictEqual(prefixFun("abcabcdabcabcabc"), [0, 0, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5, 6, 4, 5, 6]);
    assert.deepStrictEqual(prefixFun("abracadabra"), [0, 0, 0, 1, 0, 1, 0, 1, 2, 3, 4]);
  });
});
