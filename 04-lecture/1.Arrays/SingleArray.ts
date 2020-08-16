
export class SingleArray<T> {
  private arr: T[] = new Array<T>(0);

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
    let position = Math.min(index, this.size);
    let target = new Array<T>(this.size + 1);
    let i = 0;

    while (i < position) {
      target[i] = this.arr[i++];
    }

    target[i++] = item;

    for (; i < this.size + 1; i++) {
      target[i] = this.arr[i - 1]
    }
    this.arr = target;
  }

  public remove(index: number): T {
    let position = Math.min(index, this.size);
    let target = new Array<T>(this.size - 1);
    let item = this.arr[index];
    let i = 0;

    for (; i < position; i++) {
      target[i] = this.arr[i];
    }
    for (; i < this.size - 1; i++) {
      target[i] = this.arr[i + 1];
    }
    this.arr = target;

    return item;
  }

  public toString() {
    return this.arr.slice(0, this.size).join(",");
  }
}
