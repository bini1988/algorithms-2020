const assert = require("assert");
const { suff, substr } = require("./boyer–moore");

describe("Алгоритм Бойера — Мура", function () {
  it("Таблица суффиксов", function () {
    assert.deepStrictEqual(suff("колокол"), [4, 4, 4, 4, 4, 7, 7, 1]);
  });
  it("Индекс подстроки в строке", function () {
    const src = "abacabadabacabafabacabadabacabadabacabafaba";

    assert.deepStrictEqual(substr("KOLOLOKOLOKOLO", "KOLOKOL"), [6]);
    assert.deepStrictEqual(substr("SOMESTRING", "STRING"), [4]);
    assert.deepStrictEqual(substr(src, "aba"), [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40]);
    assert.deepStrictEqual(substr(src, "ca"), [3, 11, 19, 27, 35]);
    assert.deepStrictEqual(substr(src, "dabf"), []);
    assert.deepStrictEqual(substr("aaaaaaa", "aa"), [0, 1, 2, 3, 4, 5]);
  });
});
