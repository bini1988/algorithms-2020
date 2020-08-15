
export interface IArrayConstructable {
  new(): IArray;
}

export interface IArray<T = any> {
  add(item: T, index?: number): void;
  remove(index: number): T;
}
