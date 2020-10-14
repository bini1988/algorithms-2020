const assert = require("assert");
const { demucron } = require("./demucron");
const { lettering } = require("./utils");

const N = 0;
const G = [
  /**       1  2  3  4  5  6  7  8  9 10 11 12 13 14 */
  /*  1 */ [N, N, 1, N, N, N, N, N, N, N, N, N, 1, N],
  /*  2 */ [N, N, N, N, N, N, N, N, N, N, N, N, 1, N],
  /*  3 */ [N, N, N, N, N, N, N, N, N, N, N, N, N, N],
  /*  4 */ [N, N, 1, N, N, N, N, N, N, N, N, N, N, N],
  /*  5 */ [N, N, 1, N, N, N, N, N, 1, 1, N, N, N, N],
  /*  6 */ [N, N, N, 1, N, N, N, N, N, N, 1, 1, 1, N],
  /*  7 */ [N, N, N, N, N, N, N, N, N, N, 1, N, N, N],
  /*  8 */ [N, 1, N, 1, N, 1, 1, N, N, N, N, N, N, N],
  /*  9 */ [1, N, N, N, N, N, N, N, N, N, N, N, N, 1],
  /* 10 */ [1, N, N, N, N, N, 1, N, N, N, N, 1, N, N],
  /* 11 */ [N, N, 1, N, N, N, N, N, N, N, N, N, N, N],
  /* 12 */ [N, N, N, N, N, N, N, N, N, N, N, N, N, N],
  /* 13 */ [N, N, 1, N, N, N, N, N, N, N, N, N, N, N],
  /* 14 */ [N, N, N, N, N, 1, N, N, N, N, N, N, N, N],
];

describe("Алгоритм Демукрона", function () {
  it("Алгоритм Демукрона", function () {
    const levels = demucron(G);

    assert.deepStrictEqual(levels, [
        [4, 7],
        [1, 8, 9],
        [0, 6, 13],
        [5],
        [3, 10, 11, 12],
        [2],
      ]
    );
  });
});
