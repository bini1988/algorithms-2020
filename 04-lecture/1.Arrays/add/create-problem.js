
/**
 * Cоздает задачу создания и добавления элементов в коллекцию
 */
function createProblem(Collection, title) {
  function problem([line]) {
    const SIZE = parseInt(line, 10);
    const arr = new Collection();

    for(let i = 0; i < SIZE; i++) {
      arr.add(i);
    }
    return null;
  }
  problem.title = title;

  return problem;
}

module.exports = createProblem;
