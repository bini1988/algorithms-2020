const assert = require("assert");
const { floydWarshall } = require("./floyd-warshall");

const G = [
  /* 0 A */ [[1, -2], [2, 7], [3, 5]],
  /* 1 B */ [[2, 8], [3, 6]],
  /* 2 C */ [[1, 3], [3, -4]],
  /* 3 D */ [[0, -1]],
];

describe("Алгоритм Флойда — Уоршелла", function () {
  it("Алгоритм Флойда — Уоршелла", function () {
    const E = floydWarshall(G);

    assert.deepStrictEqual(E, [
      /* 0 A */ [1, -2, 6, 2],
      /* 1 B */ [3, 1, 8, 4],
      /* 2 C */ [-5, -7, 1, -4],
      /* 3 D */ [-1, -3, 5, 1],
    ]);
  });
});
