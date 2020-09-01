const { access, readFile } = require("fs").promises;

/**
 * @param {any} value
 */
function trim(value) {
  return `${value}`.trim();
}

/**
 * Вернуть содержимое входного файла
 * @param {string} filePath Путь к файлу
 * @returns {string[]} Массив строк входного файла
 */
async function readInput(filePath) {
  const input = await readFile(filePath, { encoding: "utf-8" });
  return trim(input).split(/\r?\n/);;
}

/**
 * Вернуть содержимое выходного файла
 * @param {string} filePath Путь к файлу
 * @returns {string} Содержимое выходного файла
 */
async function readOutput(filePath) {
  try {
    await access(filePath, fs.constants.F_OK | fs.constants.R_OK)
    const output = await readFile(filePath, { encoding: "utf-8" });
    return trim(output);
  } catch (error) {
    return null;
  }
}

/**
 * Запускает задачу с переданными входным и выходным условиями
 */
(async function runner() {
  const [_, __, index, problemPath, inputPath, outputPath] = process.argv;

  try {
    const input = await readInput(inputPath);
    const expect = await readOutput(outputPath);
    const problem = require(problemPath);

    const hrstart = process.hrtime();
    const output = problem(input);
    const hrtime = process.hrtime(hrstart);

    const actualData = Array.isArray(output)
      ? output.join("\r\n") : output;
    const actual = trim(actualData);
    const test = (expect === null) || (expect === actual);

    process.send({ hrtime, actual, expect, test });
  } catch (error) {
    process.send({ error: error.message });
  } finally {
    process.exit(0)
  }
})();

