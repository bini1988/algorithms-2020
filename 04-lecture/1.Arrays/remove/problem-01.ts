import { NativeArray } from "../NativeArray";

function test([line]: string[]) {
  const SIZE = parseInt(line, 10);
  const arr = new NativeArray<number>();
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

test.title = "NativeArray";

module.exports = test;
