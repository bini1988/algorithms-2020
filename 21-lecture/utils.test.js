const assert = require("assert");
const { equal, substr, zFun } = require("./utils");

describe("Функции над строками", function () {
  it("Равенство строк", function () {
    assert.strictEqual(equal("молоко", "молоко"), true);
  });
  it("Строки не равны", function () {
    assert.strictEqual(equal("молоко", "колокол"), false);
  });
  it("Индекс подстроки в строке", function () {
    const src = "abacabadabacabafabacabadabacabadabacabafaba";

    assert.deepStrictEqual(substr("SOMESTRING", "STRING"), [4]);
    assert.deepStrictEqual(substr(src, "aba"), [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40]);
    assert.deepStrictEqual(substr(src, "ca"), [3, 11, 19, 27, 35]);
    assert.deepStrictEqual(substr(src, "dabf"), []);
  });
  it("Z функция", function () {
    assert.deepStrictEqual(zFun("abcabcabca"), [10, 0, 0, 7, 0, 0, 4, 0, 0, 1]);
    assert.deepStrictEqual(zFun("abcabcdabcabcabc"), [16, 0, 0, 3, 0, 0, 0, 6, 0, 0, 6, 0, 0, 3, 0, 0]);
    assert.deepStrictEqual(zFun("abcabcabcabcdabc"), [16, 0, 0, 9, 0, 0, 6, 0, 0, 3, 0, 0, 0, 3, 0, 0]);
    assert.deepStrictEqual(zFun("abracadabra"), [11, 0, 0, 1, 0, 1, 0, 4, 0, 0, 1]);
  });
});
