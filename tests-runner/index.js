const fs = require("fs");
const path = require("path");
const { stat, readdir, readFile } = require("fs").promises;
const Table = require("cli-table");
require("colors");

function trim(value) {
  return `${value}`.trim();
}

function print(str = "") {
  return (str.length > 15)
    ? `${str.slice(0, 9)}...${str.slice(-3)}` : str;
}

function printTime([seconds, nanoseconds] = []) {
  const msseconds = seconds * 10e3 + nanoseconds * 1e-6;
  return `${msseconds.toFixed(seconds > 0 ? 2 : 4)}ms`;
}

/**
 * Вернуть список тестовых файлов
 * @param {string} problemsPath Путь к решению или к директории с решениями
 */
async function resolveTests(problemsPath) {
  const stats = await stat(problemsPath);
  const testsPath = stats.isFile()
    ? path.parse(problemsPath).dir : problemsPath;
  const files = await readdir(testsPath, { encoding: "utf-8" });
  const tests = [];

  for (let index = 0; index < files.length; index++) {
    const input = `test.${index}.in`;
    const output = `test.${index}.out`;

    if (!files.includes(input) || !files.includes(output)) break;

    tests.push([path.resolve(testsPath, input), path.resolve(testsPath, output)])
  }
  return tests;
}

/**
 * Вернуть список решений
 * @param {string} problemsPath Путь к решению или к директории с решениями
 */
async function resolveProblems(problemsPath) {
  const problems = [];
  const stats = await stat(problemsPath);

  if (stats.isFile()) {
    problems.push(require(problemsPath));
  } else if (stats.isDirectory()) {
    const files = await readdir(problemsPath, { encoding: "utf-8" });

    for (let index = 1; index < files.length; index++) {
      const problem = `problem-0${index}.js`;

      if (!files.includes(problem)) break;

      problems.push(require(path.resolve(problemsPath, problem)))
    }
  }
  return problems;
}

/**
 * Возвращает счетчик выполняемых тестов
 * @param {number} totalCount Общее количество тестов
 */
function countdownOf(totalCount) {
  let runsCount = 0;

  return async function (task) {
    const message = (runsCount >= totalCount)
      ? " Tests is finished\n"
      : ` Tests running done ${runsCount + 1} of ${totalCount}`;

    runsCount++;
    process.stdout.write("\033[0G[i]".magenta);
    process.stdout.write(message);
    return task;
  };
}

/**
 * Запуск теста
 * @param {number} index
 * @param {function[]} problems
 * @param {[string, string]} paths
 */
async function run(index, problems, [inputPath, outputPath]) {
  try {
    const inputData = await readFile(inputPath, { encoding: "utf-8" });
    const outputData = await readFile(outputPath, { encoding: "utf-8" });
    const inputLines = inputData.split(/\r?\n/);
    const task = { index, problems: [] };

    for (const problem of problems) {
      try {
        const hrstart = process.hrtime();
        const output = problem(inputLines, index);

        const hrtime = process.hrtime(hrstart);
        const actualData = Array.isArray(output)
          ? output.join("\r\n") : output;
        const actual = trim(actualData);
        const expect = trim(outputData);
        const test = (actual === expect);

        task.problems.push({ hrtime, actual, expect, test });
      } catch (error) {
        task.problems.push({ error });
      }
    }
    return task;
  } catch (error) {
    return { index, error };
  }
}

(async function () {
  try {
    const [NODE, SCRIPT_PATH, PROBLEM_PATH] = process.argv;
    const PROBLEM_FULL_PATH = path.resolve(PROBLEM_PATH);

    const problems = await resolveProblems(PROBLEM_FULL_PATH);
    const tests = await resolveTests(PROBLEM_FULL_PATH);
    const countdown = countdownOf(tests.length);
    const runs = [];

    for (let index = 0; index < tests.length; index++) {
      runs.push(run(index, problems, tests[index]).then(countdown));
    }

    const tasks = await Promise.all(runs);
    const head = ["#", ...problems.map((_, index) => `Problem #${index + 1}`)];
    const colWidths = [4, ...problems.map(() => 25)];
    const report = new Table({ head, colWidths });

    countdown();

    for (const { index, problems } of tasks) {
      const columns = [index];

      for (const { error, test, expect, actual, hrtime } of problems) {
        if (error) {
          columns.push(`${"[e] Error".red}\n${print(error.message)}`);
        } else if (test) {
          columns.push(`${"[x]".green} ${printTime(hrtime)}`);
        } else if (actual === "null") {
          columns.push(`${"[o]".red} ∞ ms`);
        } else {
          const pExpect = `${"Expect:".green} ${print(expect)}`;
          const pActual = `${"Actual:".red} ${print(actual)}`;

          columns.push(`${"[o]".red} ${printTime(hrtime)}\n${pExpect}\n${pActual}`);
        }
      }
      report.push(columns);
    }
    console.log(report.toString());
  } catch (error) {
    console.error("[e]".red, "Tests Runner:", error.message);
    console.error(error);
  }
}())
