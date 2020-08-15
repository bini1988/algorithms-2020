
export class VectorArray<T> {
  private arr: T[];
  private vector: number;
  public size: number;

  public constructor(vector: number = 10) {
    this.vector = vector;
    this.size = 0;
    this.arr = new Array<T>(this.size);
  }

  public get isEmpty() {
    return this.size === 0;
  }

  public add(item: T, index = this.size): void {
    let position = Math.min(index, this.size);
    let target = this.arr;
    let i = position;

    if (this.size === this.arr.length) {
      target = new Array<T>(this.size + this.vector);
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
