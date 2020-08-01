const fs = require("fs");
const path = require("path");
const { access, readdir, readFile } = require("fs").promises;
require("colors");

function trim(value) {
  return `${value}`.trim();
}

async function run(index, problem, [inputPath, outputPath], ms = 2000) {
  try {
    const inputData = await readFile(inputPath, { encoding: "utf-8" });
    const outputData = await readFile(outputPath, { encoding: "utf-8" });

    const output = problem(inputData.split(/\r?\n/))
    const actual = trim(output);
    const expect = trim(outputData);

    if (actual === expect) {
      console.log("[✓]".green, `Test #${index}`);
    } else {
      console.log("[✗]".red, `Test #${index}`);
      console.log("  Expect:".green, expect);
      console.log("  Actual:".red, actual);
    }
  } catch (error) {
    console.error("[e]".red, `Test #${index}:`, error.message);
  }
}

(async function () {
  try {
    const [NODE, SCRIPT_PATH, PROBLEM_PATH] = process.argv;
    const PROBLEM_FULL_PATH = path.resolve(PROBLEM_PATH);

    await access(PROBLEM_FULL_PATH, fs.constants.F_OK | fs.constants.R_OK);

    const problem = require(PROBLEM_FULL_PATH);
    const PROBLEM_DIR_PATH = path.parse(PROBLEM_FULL_PATH).dir;

    const files = await readdir(PROBLEM_DIR_PATH, { encoding: "utf-8" });
    const runs = [];

    console.log("[i]".magenta, "Running tests...")

    for (let index = 0; true; index++) {
      const inputName = `test.${index}.in`;
      const outputName= `test.${index}.out`;

      if (files.includes(inputName) && files.includes(outputName)) {
        const inputPath = path.resolve(PROBLEM_DIR_PATH, inputName);
        const outputPath = path.resolve(PROBLEM_DIR_PATH, outputName);

        runs.push(run(index, problem, [inputPath, outputPath]));
      } else {
        break;
      }
    }

    await Promise.all(runs);

    console.log("[i]".magenta, "Running tests finished");
  } catch (error) {
    console.error("[e]".red, "Tests Runner:", error.message);
  }
}())

