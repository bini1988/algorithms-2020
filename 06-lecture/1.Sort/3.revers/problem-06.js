const createProblem = require("./create-problem");
const { termSedgewick, sort } = require("../ShellSort");

function sortSedgewick(arr) {
  return sort(arr, termSedgewick);
}

module.exports = createProblem(sortSedgewick, "ShellSort III");
