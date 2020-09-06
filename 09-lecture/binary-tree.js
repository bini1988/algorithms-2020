
class TreeNode {
  constructor(value) {
    /** @type {TreeNode} */
    this.left = null;
    /** @type {TreeNode} */
    this.right = null;
    /** @type {TreeNode} */
    this.parent = null;

    this.value = value;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  /**
   * Добавление узла в поддерево
   * @param {TreeNode} node Добавляемый узел
   * @param {TreeNode} root Корень поддерева
   * @param {TreeNode} parent Родительский узел корня поддерева
   * @returns {TreeNode} Корень поддерева
   */
  append(node, root, parent = root.parent) {
    if (node === null) {
      return root;
    }
    if (root === null) {
      node.parent = parent;
      return node;
    }
    if (node.value === root.value) {
      return root;
    }
    if (node.value > root.value) {
      root.right = this.append(node, root.right, root);
    } else {
      root.left = this.append(node, root.left, root);
    }
    return root;
  }

  /**
   * Вставка элемента
   * @param {number} value Значение элемента
   */
  insert(value) {
    this.root = this.append(new TreeNode(value), this.root, null);
  }

  /**
   * Поиск элемента
   * @param {number} value Значение элемента
   * @param {TreeNode} [node]
   * @returns {boolean}
   */
  search(value, node = this.root) {
    if (node === null) {
      return false;
    }
    if (node.value === value) {
      return true;
    }
    if (node.value > value) {
      return this.search(value, node.left);
    } else {
      return this.search(value, node.right);
    }
  }

  /**
   * Удаление элемента
   * @param {number} value Значение элемента
   * @param {TreeNode} [node] Текущая вершина дерева
   * @param {string} [path] Правая/левая вершина
   * @returns {number}
   */
  remove(value, node = this.root, path) {
    if (node === null) {
      return null;
    }
    if (node.value === value) {
      if (node.parent) {
        node.parent[path] = null;
        node.parent = this.append(node.left, node.parent);
        node.parent = this.append(node.right, node.parent);
        return node.value;
      }
      if (node.left) {
        this.root = node.left;
        this.root = this.append(node.right, this.root, null);
        return node.value;
      }
      this.root = node.right;
      return node.value;
    }
    if (node.value > value) {
      return this.remove(value, node.left, "left");
    } else {
      return this.remove(value, node.right, "right");
    }
  }

  /**
   * Возвращает массив сохранненых значений в упорядоченном виде
   * @returns {number[]}
   */
  values(node = this.root, values = []) {
    if (node) {
      if (node.left) this.values(node.left, values);
      values.push(node.value);
      if (node.right) this.values(node.right, values);
    }
    return values;
  }
}

module.exports = BinaryTree;
