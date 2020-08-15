import { IArrayConstructable } from "../IArray";

export function createTest(Array: IArrayConstructable) {
  function test(lines: string[]) {
    const [source, method = "add", param1, param2] = lines;
    const arr = new Array();
    const sourceArr = source.split(",");

    for(let i = 0; i < sourceArr.length; i++) {
      arr.add(parseInt(sourceArr[i], 10));
    }
    if (method === "add") {
      const index = param2
        ? parseInt(param2, 10) : undefined;

      arr.add(parseInt(param1, 10), index)
    }
    if (method === "remove") {
      arr.remove(parseInt(param1, 10))
    }
    return arr.toString();
  }

  test.title = "";

  return test;
}
