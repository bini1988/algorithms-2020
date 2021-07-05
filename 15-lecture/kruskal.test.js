const assert = require("assert");
const { kruskal } = require("./kruskal");

const G = [
  /* 0 A */ [[1, 7], [3, 5]],
  /* 1 B */ [[0, 7], [2, 8], [3, 9], [4, 7]],
  /* 2 C */ [[1, 8], [4, 5]],
  /* 3 D */ [[0, 5], [1, 9], [4, 15], [5, 6]],
  /* 4 E */ [[1, 7], [2, 5], [3, 15], [5, 8], [6, 9]],
  /* 5 F */ [[3, 6], [4, 8], [6, 11]],
  /* 6 G */ [[4, 9], [5, 11]],
];

describe("Алгоритм Краскала", function () {
  it("Алгоритм Краскала", function () {
    const E = kruskal(G);

    assert.deepStrictEqual(E, [
      { v1: 0, v2: 3 },
      { v1: 2, v2: 4 },
      { v1: 3, v2: 5 },
      { v1: 0, v2: 1 },
      { v1: 1, v2: 4 },
      { v1: 4, v2: 6 }
    ]);
  });
});
