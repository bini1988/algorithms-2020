const assert = require("assert");
const { bellmanFord } = require("./bellman-ford");

const G = [
  /* 0 A */ [[1, -2], [2, 7], [3, 5]],
  /* 1 B */ [[2, 8], [3, 6]],
  /* 2 C */ [[1, 3], [3, -4]],
  /* 3 D */ [[0, -1]],
];

describe("Алгоритм Беллмана — Форда", function () {
  it("Алгоритм Беллмана — Форда", function () {
    const E = bellmanFord(G, /* A */ 0, /* D */ 3);

    assert.deepStrictEqual(E, [
      { v1: 0, v2: 1},
      { v1: 1, v2: 2},
      { v1: 2, v2: 3},
    ]);
  });
  it("Алгоритм Беллмана — Форда", function () {
    const E = bellmanFord(G, /* C */ 2, /* A */ 0);

    // TODO: Не работает, возможно важен порядок обхода ребер
    assert.deepStrictEqual(E, [
      { v1: 2, v2: 1},
      { v1: 1, v2: 0},
    ]);
  });
});
