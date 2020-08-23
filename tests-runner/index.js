require("colors");
const path = require("path");
const { fork } = require("child_process");
const { stat, readdir } = require("fs").promises;
const Table = require("cli-table");

const PROBLEM_RUNNER_PATH = path.resolve(__dirname, "./problem-runner.js");
const PROBLEM_RUNNER_TIMEOUT = 2000; // ms

function print(str = "", maxLength = 15) {
  const endIndex = Math.trunc((maxLength - 3));
  return (str.length > maxLength)
    ? `${str.slice(0, endIndex)}...` : str;
}

function printTime([seconds, nanoseconds] = []) {
  if (isFinite(seconds) && isFinite(nanoseconds)) {
    const msseconds = seconds * 10e3 + nanoseconds * 1e-6;
    return `${msseconds.toFixed(seconds > 0 ? 2 : 4)}ms`;
  }
  return `∞ ms`;
}

function printProblemsHead(problems) {
  return problems.map(({ problem }, index) => problem.title || `Problem #${index + 1}`);
}

function createReportTable(problems) {
  const head = ["#", "Test", ...printProblemsHead(problems)];
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
    const problemPath = problemsPath;
    const problem = require(problemPath);

    problems.push({ problemPath, problem });
  } else if (stats.isDirectory()) {
    const files = await readdir(problemsPath, { encoding: "utf-8" });

    for (let index = 1; index < files.length; index++) {
      const problemName = `problem-0${index}.js`;

      if (!files.includes(problemName)) break;

      const problemPath = path.resolve(problemsPath, problemName);
      const problem = require(problemPath);

      problems.push({ problemPath, problem })
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
 * Запуск теста для переданной задачи
 * @param {string} problemPath
 * @param {[string, string]} paths
 * @param {number} ms
 */
async function runProblem(problemPath, [inputPath, outputPath], ms) {
  return new Promise((resolve, reject) => {
    let timeout = null;
    let processFork = fork(PROBLEM_RUNNER_PATH, [problemPath, inputPath, outputPath]);

    processFork.on("error", reject);
    processFork.on("message", message => {
      clearTimeout(timeout);
      resolve(message);
    });

    timeout = setTimeout(() => {
      if (processFork.kill("SIGKILL")) {
        resolve({
          hrtime: [Infinity, Infinity], actual: null, expect: null, test: null,
        });
      }
    }, ms);
  });
}

/**
 * Запуск теста
 * @param {number} index
 * @param {object} problems
 * @param {[string, string]} paths
 * @param {number} timeout
 */
async function run(index, problems, paths = [], timeout) {
  try {
    const task = { index, problems: [], paths };

    for (const { problemPath } of problems) {
      try {
        task.problems.push(await runProblem(problemPath, paths, timeout));
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
    const [NODE, SCRIPT_PATH, PROBLEM_PATH, OPTION_KEY, OPTION_VALUE] = process.argv;
    const PROBLEM_FULL_PATH = path.resolve(PROBLEM_PATH);

    const problems = await resolveProblems(PROBLEM_FULL_PATH);
    const tests = await resolveTests(PROBLEM_FULL_PATH);
    const countdown = countdownOf(tests.length);
    const runs = [];
    const PROBLEM_TIMEOUT = (OPTION_KEY === "-t")
      ? parseInt(OPTION_VALUE, 10) || PROBLEM_RUNNER_TIMEOUT
      : PROBLEM_RUNNER_TIMEOUT;

    for (let index = 0; index < tests.length; index++) {
      runs.push(run(index, problems, tests[index], PROBLEM_TIMEOUT).then(countdown));
    }
    const tasks = await Promise.all(runs);
    const report = createReportTable(problems);

    countdown();

    for (const { index, error, paths, problems } of tasks) {
      const [inputPath] = paths;
      const columns = [index, path.basename(inputPath, path.extname(inputPath))];

      if (error) {
        columns.push(`${"[e] ".red}${print(error.message)}`);
        console.error(error);
        continue;
      }
      for (const { error, test, expect, actual, hrtime } of problems) {
        if (error) {
          columns.push(`${"[e]".red}\n${print(error)}`);
          console.error(error);
        } else if (test === null) {
          columns.push(`${"[t]".yellow} ${printTime(hrtime)}`);
        } else if (test) {
          columns.push(`${"[x]".green} ${printTime(hrtime)}`);
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
