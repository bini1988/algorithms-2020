const assert = require("assert");
const { reverse, kosaraju } = require("./kosaraju");

const G = [
  /* 0 A */ [1],
  /* 1 B */ [2, 4, 5],
  /* 2 C */ [3, 6],
  /* 3 D */ [2, 7],
  /* 4 E */ [0, 5],
  /* 5 F */ [6],
  /* 6 G */ [5],
  /* 7 H */ [3, 6],
];

describe("Алгоритм Косарайю", function () {
  it("Измененние направление дуг графа", function () {
    assert.deepStrictEqual(reverse(G), [
      /* 0 A */ [4],
      /* 1 B */ [0],
      /* 2 C */ [1, 3],
      /* 3 D */ [2, 7],
      /* 4 E */ [1],
      /* 5 F */ [1, 4, 6],
      /* 6 G */ [2, 5, 7],
      /* 7 H */ [3],
    ]);
  });
  it("Алгоритм Косарайю", function () {
    const C = kosaraju(G);

    assert.deepStrictEqual(C.length, G.length);
    assert.deepStrictEqual(C, [0, 0, 1, 1, 0, 2, 2, 1]);
  });
});
