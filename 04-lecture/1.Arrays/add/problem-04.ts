import { FactorArray } from "../FactorArray";

function test([line]: string[]) {
  const SIZE = parseInt(line, 10);
  const arr = new FactorArray<number>();

  for(let i = 0; i < SIZE; i++) {
    arr.add(i);
  }
  return null;
}

test.title = "FactorArray";

module.exports = test;
