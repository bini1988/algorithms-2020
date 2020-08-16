import { FactorArray } from "../FactorArray";

function test([line]: string[]) {
  const SIZE = parseInt(line, 10);
  const arr = new FactorArray<number>();
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

test.title = "FactorArray";

module.exports = test;
