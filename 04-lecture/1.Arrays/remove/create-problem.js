
/**
 * Cоздает задачу создания, инициализации и удаления элементов из коллекции
 */
function createProblem(Collection, title) {
  function problem([line]) {
    const SIZE = parseInt(line, 10);
    const arr = new Collection();
    const source = new Array(SIZE);

    for(let i = 0; i < SIZE; i++) {
      source[i] = i;
    }
    arr.from(source);

    for(let i = 0; i < SIZE; i++) {
      arr.remove(0);
    }
    return null;
  }
  problem.title = title;

  return problem;
}

module.exports = createProblem;
