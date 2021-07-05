const assert = require("assert");
const BinaryTree = require("./binary-tree");

describe("BinaryTree", function () {
  it("Добавление элементов", function () {
    const tree = new BinaryTree();

    assert.deepStrictEqual(tree.values(), []);

    tree.insert(50);
    assert.deepStrictEqual(tree.values(), [50]);

    tree.insert(17);
    assert.deepStrictEqual(tree.values(), [17, 50]);

    tree.insert(9);
    assert.deepStrictEqual(tree.values(), [9, 17, 50]);

    tree.insert(23);
    assert.deepStrictEqual(tree.values(), [9, 17, 23, 50]);

    tree.insert(76);
    assert.deepStrictEqual(tree.values(), [9, 17, 23, 50, 76]);

    tree.insert(54);
    assert.deepStrictEqual(tree.values(), [9, 17, 23, 50, 54, 76]);

    tree.insert(85);
    assert.deepStrictEqual(tree.values(), [9, 17, 23, 50, 54, 76, 85]);
  });
  it("Удаление элемента из пустого дерева", function () {
    const tree = new BinaryTree();
    const node = tree.remove(17);

    assert.equal(node, null);
    assert.deepStrictEqual(tree.values(), []);
  });
  it("Удаление элемента из дерева с одним элементом", function () {
    const tree = new BinaryTree();

    tree.insert(50);
    assert.deepStrictEqual(tree.values(), [50]);

    const value = tree.remove(50);

    assert.equal(value, 50);
    assert.deepStrictEqual(tree.values(), []);
  });
  it("Удаление элементов из левого поддерева", function () {
    const tree = new BinaryTree();

    tree.insert(50);
    tree.insert(17);
    tree.insert(9);
    tree.insert(23);
    tree.insert(76);
    tree.insert(54);
    tree.insert(85);

    assert.deepStrictEqual(tree.values(), [9, 17, 23, 50, 54, 76, 85]);

    const value = tree.remove(17);

    assert.equal(value, 17);
    assert.deepStrictEqual(tree.values(), [9, 23, 50, 54, 76, 85]);
  });
  it("Удаление элементов из правого поддерева", function () {
    const tree = new BinaryTree();

    tree.insert(50);
    tree.insert(17);
    tree.insert(9);
    tree.insert(23);
    tree.insert(76);
    tree.insert(54);
    tree.insert(85);

    assert.deepStrictEqual(tree.values(), [9, 17, 23, 50, 54, 76, 85]);

    const value = tree.remove(76);

    assert.equal(value, 76);
    assert.deepStrictEqual(tree.values(), [9, 17, 23, 50, 54, 85]);
  });
  it("Поиск элементов", function () {
    const values = [9, 17, 23, 50, 54, 76];
    const tree = new BinaryTree();

    for (const value of values) {
      tree.insert(value);
    }
    for (const value of values) {
      assert.equal(tree.search(value), true);
    }
    for (const value of values) {
      assert.equal(tree.search(value * 100), false);
    }
  });
});
