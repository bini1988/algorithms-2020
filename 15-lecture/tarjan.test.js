const assert = require("assert");
const { tarjan } = require("./tarjan");
const { lettering } = require("./utils");

const G = [
  /* 0 A */ [1, 4],
  /* 1 B */ [5, 6],
  /* 2 C */ [5],
  /* 3 D */ [7],
  /* 4 E */ [1],
  /* 5 F */ [6],
  /* 6 G */ [3],
  /* 7 H */ [],
];

describe("Алгоритм Тарьяна", function () {
  it("Алгоритм Тарьяна", function () {
    const vertexes = tarjan(G);

    assert.deepStrictEqual(vertexes.length, G.length);
    assert.deepStrictEqual(
      lettering(vertexes), ["C", "A", "E", "B", "F", "G", "D", "H"]
    );
  });
});
