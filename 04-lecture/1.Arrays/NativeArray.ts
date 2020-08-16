import { IArray } from "./IArray.d";

export class NativeArray<T> implements IArray<T> {
  private arr: T[] = [];

  public get size() {
    return this.arr.length;
  }

  public get isEmpty() {
    return this.size === 0;
  }

  public from(arr: T[]) {
    this.arr = arr;
  }

  public add(item: T, index = this.size): void {
    this.arr.splice(index, 0, item);
  }

  public remove(index: number): T {
    const [item] = this.arr.splice(index, 1);
    return item;
  }

  public toString() {
    return this.arr.slice(0, this.size).join(",");
  }
}
