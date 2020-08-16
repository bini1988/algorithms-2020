import { SingleArray } from "../SingleArray";

function test([line]: string[]) {
  const SIZE = parseInt(line, 10);
  const arr = new SingleArray<number>();
  const source = new Array(SIZE);

  for(let i = 0; i < SIZE; i++) {
    source[i] = i;
  }
  arr.from(source);

  for(let i = 0; i < SIZE; i++) {
    arr.remove(0);
  }
  return null;
}

test.title = "SingleArray";

module.exports = test;
