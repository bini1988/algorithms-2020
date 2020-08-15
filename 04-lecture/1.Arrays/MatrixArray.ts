import { IArray } from "./IArray";

export class MatrixArray<T> {
  private box: Array<Array<T>>;
  /** Количество элементов в одном под массиве */
  private amount: number;
  public size: number;

  public constructor() {
    this.size = 0;
    this.amount = 5;
    this.box = [[]];
  }

  public get isEmpty() {
    return this.size === 0;
  }

  public indexesOf(i: number) {
    return [~~(i / this.amount), i % this.amount];
  }

  public add(item: T, index = this.size): void {
    if (this.size === this.box.length * this.amount) {
      this.box.push(new Array(this.amount));
    }
    let i = index;
    let [j, k] = this.indexesOf(i);
    let tmp = this.box[j][k];

    this.box[j][k] = item;

    for (i++; i < this.size + 1; i++) {
      [j, k] = this.indexesOf(i);
      [tmp, this.box[j][k]] = [this.box[j][k], tmp];
    }
    this.size++;
  }

  public remove(index: number): T {
    let [j1, k1] = this.indexesOf(index);
    let item = this.box[j1][k1];

    for (let i = index; i < this.size - 1; i++) {
      let [j2, k2] = this.indexesOf(i + 1);

      this.box[j1][k1] = this.box[j2][k2];
      [j1, k1] = [j2, k2];
    }
    this.size--;
    return item;
  }

  public toString() {
    let out = [];

    for (let i = 0; i < this.size; i++) {
      let [j, k] = this.indexesOf(i);
      out.push(this.box[j][k])
    }
    return out.join(",");
  }
}
