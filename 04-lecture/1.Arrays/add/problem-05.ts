import { MatrixArray } from "../MatrixArray";

function test([line]: string[]) {
  const SIZE = parseInt(line, 10);
  const arr = new MatrixArray<number>();

  for(let i = 0; i < SIZE; i++) {
    arr.add(i);
  }
  return null;
}

test.title = "MatrixArray";

module.exports = test;
