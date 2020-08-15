const fs = require("fs");
const path = require("path");
const { stat, access, readdir, readFile } = require("fs").promises;
const Table = require("cli-table");
require("colors");

function trim(value) {
  return `${value}`.trim();
}

function print(str = "", maxLength = 15) {
  const endIndex = Math.trunc((maxLength - 3) * 0.5);
  return (str.length > maxLength)
    ? `${str.slice(0, endIndex)}...${str.slice(-endIndex)}` : str;
}

function printTime([seconds, nanoseconds] = []) {
  const msseconds = seconds * 10e3 + nanoseconds * 1e-6;
  return `${msseconds.toFixed(seconds > 0 ? 2 : 4)}ms`;
}

function printProblemsHead(problems) {
  return problems.map((problem, index) => problem.title || `Problem #${index + 1}`);
}

function createReportTable(problems) {
  const head = ["#", "Input", ...printProblemsHead(problems)];
  const colWidths = [4, 10, ...problems.map(() => 20)];

  return new Table({ head, colWidths });
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

    if (!files.includes(input)) break;

    tests.push([
      path.resolve(testsPath, input),
      path.resolve(testsPath, output),
    ])
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

async function readInput(inputPath) {
  const input = await readFile(inputPath, { encoding: "utf-8" });
  return trim(input).split(/\r?\n/);
}

async function readOutput(outputPath) {
  try {
    await access(outputPath, fs.constants.F_OK | fs.constants.R_OK)
    const output = await readFile(outputPath, { encoding: "utf-8" });
    return trim(output);
  } catch (error) {
    return null;
  }
}

/**
 * Запуск теста
 * @param {number} index
 * @param {function[]} problems
 * @param {[string, string]} paths
 */
async function run(index, problems, [inputPath, outputPath]) {
  try {
    const input = await readInput(inputPath);
    const task = { index, input, problems: [] };
    const expect = await readOutput(outputPath);

    for (const problem of problems) {
      try {
        const hrstart = process.hrtime();
        const output = problem(input, index);
        const hrtime = process.hrtime(hrstart);

        const actualData = Array.isArray(output)
          ? output.join("\r\n") : output;
        const actual = trim(actualData);
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
    const [NODE, SCRIPT_PATH, PROBLEM_PATH, OPTION_KEY] = process.argv;
    const PROBLEM_FULL_PATH = path.resolve(PROBLEM_PATH);

    const problems = await resolveProblems(PROBLEM_FULL_PATH);
    const tests = await resolveTests(PROBLEM_FULL_PATH);
    const countdown = countdownOf(tests.length);
    const runs = [];

    for (let index = 0; index < tests.length; index++) {
      runs.push(run(index, problems, tests[index]).then(countdown));
    }

    const tasks = await Promise.all(runs);
    const report = createReportTable(problems);

    countdown();

    for (const { index, error, input, problems } of tasks) {
      const columns = [index, print(input, 8)];

      if (error) {
        columns.push(`${"[e] Error".red}\n${print(error.message)}`);
        continue;
      }
      for (const { error, test, expect, actual, hrtime } of problems) {
        if (error) {
          columns.push(`${"[e] Error".red}\n${print(error.message)}`);
        } else if (test || (expect === null)) {
          columns.push(`${"[x]".green} ${printTime(hrtime)}`);
        } else if (actual === "null") {
          columns.push(`${"[o]".red} ∞ ms`);
        } else {
          const pExpect = `${"E:".green} ${print(expect)}`;
          const pActual = `${"A:".red} ${print(actual)}`;

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
