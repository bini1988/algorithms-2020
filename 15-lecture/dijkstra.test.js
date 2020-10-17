const assert = require("assert");
const { dijkstra } = require("./dijkstra");

const G = [
  /* 0 A */ [[1, 2], [2, 3], [3, 6]],
  /* 1 B */ [[0, 2], [2, 4], [4, 9]],
  /* 2 C */ [[0, 3], [1, 4], [3, 1], [4, 7], [5, 6]],
  /* 3 D */ [[0, 6], [2, 1], [5, 4]],
  /* 4 E */ [[1, 9], [2, 7], [5, 1], [6, 5]],
  /* 5 F */ [[2, 6], [3, 4], [4, 1], [6, 8]],
  /* 6 G */ [[4, 5], [5, 8]],
];

describe("Алгоритм Дейкстры", function () {
  it("Поиск кратчайшего пути между A и G", function () {
    const E = dijkstra(G, /* A */ 0, /* G */ 6);

    assert.deepStrictEqual(E, [
      { v1: 0, v2: 2},
      { v1: 2, v2: 3},
      { v1: 3, v2: 5},
      { v1: 5, v2: 4},
      { v1: 4, v2: 6},
    ]);
  });
  it("Поиск кратчайшего пути между A и F", function () {
    const E = dijkstra(G, /* A */ 0, /* F */ 5);

    assert.deepStrictEqual(E, [
      { v1: 0, v2: 2},
      { v1: 2, v2: 3},
      { v1: 3, v2: 5},
    ]);
  });
  it("Поиск кратчайшего пути между C и G", function () {
    const E = dijkstra(G, /* C */ 2, /* G */ 6);

    assert.deepStrictEqual(E, [
      { v1: 2, v2: 3},
      { v1: 3, v2: 5},
      { v1: 5, v2: 4},
      { v1: 4, v2: 6},
    ]);
  });
});
