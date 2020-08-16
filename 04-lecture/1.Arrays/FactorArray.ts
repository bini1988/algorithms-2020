
export class FactorArray<T> {
  private arr: T[];
  public size: number;

  public constructor() {
    this.arr = new Array<T>(10);
    this.size = 0;
  }

  public get isEmpty() {
    return this.size === 0;
  }

  public from(arr: T[]) {
    this.arr = arr;
    this.size = arr.length;
  }

  public add(item: T, index = this.size): void {
    let position = Math.min(index, this.size);
    let target = this.arr;
    let i = position;

    if (this.size === this.arr.length) {
      target = new Array<T>(this.size * 2 + 1);
      i = 0;

      while (i < position) {
        target[i] = this.arr[i++];
      }
    }

    target[i++] = item;

    for (; i < this.size + 1; i++) {
      target[i] = this.arr[i - 1]
    }

    this.arr = target;
    this.size++;
  }

  public remove(index: number): T {
    let position = Math.min(index, this.size);
    let item = this.arr[index];

    for (let i = position; i < this.size - 1; i++) {
      this.arr[i] = this.arr[i + 1];
    }
    this.size--;

    return item;
  }

  public toString() {
    return this.arr.slice(0, this.size).join(",");
  }
}
