import { VectorArray } from "../VectorArray";

function test([line]: string[]) {
  const SIZE = parseInt(line, 10);
  const arr = new VectorArray<number>(10);

  for(let i = 0; i < SIZE; i++) {
    arr.add(i);
  }
  return null;
}

test.title = "VectorArray";

module.exports = test;
