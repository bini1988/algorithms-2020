const assert = require("assert");
const MatrixArray = require("./MatrixArray");

describe("Arrays/MatrixArray", function () {
  it("Создание пустой коллекции", function () {
    const arr = new MatrixArray();

    assert.equal(arr.isEmpty, true);
    assert.equal(arr.size, 0);
    assert.deepStrictEqual(arr.toArray(), []);
  });

  it("Добавление элементов в коллекцию", function () {
    const arr = new MatrixArray();

    arr.add(1);
    arr.add(2);
    arr.add(3);
    arr.add(4);

    assert.equal(arr.isEmpty, false);
    assert.equal(arr.size, 4);
    assert.deepStrictEqual(arr.toArray(), [1, 2, 3, 4]);
  });

  it("Добавление элементов в начало коллекции", function () {
    const arr = new MatrixArray(2);

    arr.add(1);
    arr.add(2);
    arr.add(3);
    arr.add(4);

    arr.add(5, 0);

    assert.equal(arr.isEmpty, false);
    assert.equal(arr.size, 5);
    assert.deepStrictEqual(arr.toArray(), [5, 1, 2, 3, 4]);
  });

  it("Добавление элементов в середину коллекции", function () {
    const arr = new MatrixArray(2);

    arr.add(1);
    arr.add(2);
    arr.add(3);
    arr.add(4);

    arr.add(5, 1);

    assert.equal(arr.isEmpty, false);
    assert.equal(arr.size, 5);
    assert.deepStrictEqual(arr.toArray(), [1, 5, 2, 3, 4]);
  });

  it("Добавление элементов в конец коллекции", function () {
    const arr = new MatrixArray(2);

    arr.add(1);
    arr.add(2);
    arr.add(3);
    arr.add(4);

    arr.add(5);

    assert.equal(arr.isEmpty, false);
    assert.equal(arr.size, 5);
    assert.deepStrictEqual(arr.toArray(), [1, 2, 3, 4, 5]);
  });

  it("Удаление элемента из начала коллекции", function () {
    const arr = new MatrixArray(2);

    arr.add(1);
    arr.add(2);
    arr.add(3);
    arr.add(4);

    assert.equal(arr.remove(0), 1);
    assert.equal(arr.isEmpty, false);
    assert.equal(arr.size, 3);
    assert.deepStrictEqual(arr.toArray(), [2, 3, 4]);
  });

  it("Удаление элемента из середины коллекции", function () {
    const arr = new MatrixArray(2);

    arr.add(1);
    arr.add(2);
    arr.add(3);
    arr.add(4);

    assert.equal(arr.remove(2), 3);
    assert.equal(arr.isEmpty, false);
    assert.equal(arr.size, 3);
    assert.deepStrictEqual(arr.toArray(), [1, 2, 4]);
  });

  it("Удаление элемента с конца коллекции", function () {
    const arr = new MatrixArray(2);

    arr.add(1);
    arr.add(2);
    arr.add(3);
    arr.add(4);

    assert.equal(arr.remove(), 4);
    assert.equal(arr.isEmpty, false);
    assert.equal(arr.size, 3);
    assert.deepStrictEqual(arr.toArray(), [1, 2, 3]);
  });
});
