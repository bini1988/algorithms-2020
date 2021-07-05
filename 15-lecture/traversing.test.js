const assert = require("assert");
const { dfs_r, dfs, bfs } = require("./traversing");
const { lettering } = require("./utils");

const G = [
  /* 0 A */ [1, 4],
  /* 1 B */ [0, 2, 4, 5],
  /* 2 C */ [1, 3, 5],
  /* 3 D */ [2, 6, 7],
  /* 4 E */ [0, 1, 5],
  /* 5 F */ [1, 2, 4],
  /* 6 G */ [3, 7],
  /* 7 H */ [3, 6],
];

describe("Обход графа", function () {
  it("Обход в глубину (рекурсия)", function () {
    const used = []
    const path = [];

    dfs_r(G, /** A */ 0, used, path);

    assert.deepStrictEqual(used.length, G.length);
    assert.deepStrictEqual(lettering(path), ["A", "B", "C", "D", "G", "H", "F", "E"]);
  });
  it("Обход в глубину (стек)", function () {
    const used = []
    const path = [];

    dfs(G, /** A */ 0, used, path);

    assert.deepStrictEqual(used.length, G.length);
    assert.deepStrictEqual(lettering(path), ["A", "B", "C", "D", "G", "H", "F", "E"]);
  });
  it("Обход в ширину (очередь)", function () {
    const used = []
    const path = [];

    bfs(G, /** A */ 0, used, path);

    assert.deepStrictEqual(used.length, G.length);
    assert.deepStrictEqual(lettering(path), ["A", "E", "B", "F", "C", "D", "H", "G"])
  });
});
