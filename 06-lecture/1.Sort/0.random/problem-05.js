const createProblem = require("./create-problem");
const { termHibbard, sort } = require("../ShellSort");

function sortHibbard(arr) {
  return sort(arr, termHibbard);
}

module.exports = createProblem(sortHibbard, "ShellSort II");
