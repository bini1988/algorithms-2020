const assert = require("assert");
const { dfs_r, dfs, bfs } = require("./traversing");
const { lettering } = require("./utils");

const graph = [
  /* 0 A */ [1, 4],
  /* 1 B */ [0, 2, 4, 5],
  /* 2 C */ [1, 3, 5],
  /* 3 D */ [2, 6, 7],
  /* 4 E */ [0, 1, 5],
  /* 5 F */ [1, 2, 4],
  /* 6 G */ [3, 7],
  /* 7 H */ [3, 6],
];

describe("Поиск в графе", function () {
  it("Поиск в глубину (рекурсия)", function () {
    const [isFound, path] = dfs_r(graph, /** E */ 4);

    assert.deepStrictEqual(isFound, true);
    assert.deepStrictEqual(lettering(path), ["A", "B", "C", "F", "E"]);
  });
  it("Поиск в глубину (рекурсия, вершина отсутствует в графе)", function () {
    const [isFound, path] = dfs_r(graph, /** I */ 8);

    assert.deepStrictEqual(isFound, false);
    assert.deepStrictEqual(lettering(path), []);
  });
  it("Поиск в глубину", function () {
    const [isFound, path] = dfs(graph, /** E */ 4);

    assert.deepStrictEqual(isFound, true);
    // assert.deepStrictEqual(lettering(path), ["A", "B", "C", "F", "E"]);
  });
  it("Поиск в глубину (вершина отсутствует в графе)", function () {
    const [isFound, path] = dfs(graph, /** I */ 8);

    assert.deepStrictEqual(isFound, false);
    // assert.deepStrictEqual(lettering(path), []);
  });
  it("Поиск в ширину", function () {
    const [isFound, path] = bfs(graph, /** E */ 4);

    assert.deepStrictEqual(isFound, true);
    assert.deepStrictEqual(lettering(path), ["A", "E"]);
  });
  it("Поиск в ширину (вершина отсутствует в графе)", function () {
    const [isFound, path] = bfs(graph, /** I */ 8);

    assert.deepStrictEqual(isFound, false);
    assert.deepStrictEqual(lettering(path), []);
  });
});
