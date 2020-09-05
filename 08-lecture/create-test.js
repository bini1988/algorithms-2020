const crypto = require("crypto");
const path = require("path");
const fs = require("fs");
const util = require("util");
const buffer = require("buffer");

const open = util.promisify(fs.open);
const write = util.promisify(fs.write);
const close = util.promisify(fs.close);

const TESTS_SIZES = [1e6 * 2, 1e7 * 2, 1e8 * 2, 1e9 * 2, 1e10 * 2];

/**
 * Возвращает буффер заполнненый случайным набором байтов
 * @param {number} size Количество байт
 */
async function createRandomBytes(size) {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(size, (error, buffer) => {
      if (error) return reject(error);
      resolve(buffer);
    });
  });
}

(async function () {
  const [NODE, SCRIPT_PATH] = process.argv;
  const CHUNK_SIZE = Math.trunc(buffer.constants.MAX_LENGTH * 0.5);

  for (const SIZE of TESTS_SIZES) {
    const TEST_NAME = `test.${SIZE.toExponential(0)}.bin`;
    const TEST_FULL_PATH = path.resolve(__dirname, TEST_NAME);

    const fd = await open(TEST_FULL_PATH, "w");

    let bytesTotal = SIZE;
    let bytesWritten = 0;

    while (bytesTotal > 0) {
      const bytesChunk = Math.min(bytesTotal, CHUNK_SIZE);
      const buffer = await createRandomBytes(bytesChunk);
      const written = await write(fd, buffer);

      bytesWritten += written.bytesWritten;
      bytesTotal -= bytesChunk
    }
    console.log(`Written ${bytesWritten.toExponential(0)} bytes in ${TEST_NAME}`);
    close(fd);
  }
}())
