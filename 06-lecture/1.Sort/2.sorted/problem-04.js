const createProblem = require("./create-problem");
const { termShell, sort } = require("../ShellSort");

function sortShell(arr) {
  return sort(arr, termShell);
}

module.exports = createProblem(sortShell, "ShellSort I");
