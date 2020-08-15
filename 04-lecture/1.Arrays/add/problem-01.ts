import { NativeArray } from "../NativeArray";

function test([line]: string[]) {
  const SIZE = parseInt(line, 10);
  const arr = new NativeArray<number>();

  for(let i = 0; i < SIZE; i++) {
    arr.add(i);
  }
  return null;
}

test.title = "NativeArray";

module.exports = test;
