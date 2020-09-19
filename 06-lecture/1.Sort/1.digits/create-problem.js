
/**
 * Cоздает задачу сортировки массива элементов
 */
function createProblem(sort, title) {
  function problem([, items]) {
    return sort(items.split(" ")).join(" ");
  }
  problem.title = title;

  return problem;
}

module.exports = createProblem;
