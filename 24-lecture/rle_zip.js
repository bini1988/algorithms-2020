const fs = require("fs");
const path = require("path");
const { Transform } = require("stream");

/**
 * Сжатие входного потока байт алгоримом RLE
 */
class RLECompress extends Transform {
  constructor(options) {
    super(options);

    this._bytesIn = 0;
    this._bytesOut = 0;
    this.MAX_COUNT = 127;

    this._count = 0;   // Текущий счетчик одинаковых символов
    this._ch = null;   // Текущий символ
  }

  get compression() {
    return this._bytesIn > 0
      ? (this._bytesIn - this._bytesOut) / this._bytesIn * 100 : 0
  }

  _cut() {
    const count = this._count;
    const ch = this._ch;
    const chunk = Buffer.from([count, ch]);

    this.push(chunk);
    this._bytesOut += 2;
  }

  /**
   * @param {Buffer} chunk
   */
  _transform(chunk, encoding, done) {
    this._bytesIn += chunk.length;

    for (const ch of chunk) {
      if (this._ch === ch && this._count < 127) {
        this._count++;
      } else if (this._count > 0) {
        this._cut();
        this._count = 1;
      } else {
        this._count = 1;
      }
      this._ch = ch;
    }
    done();
  }

  _flush(done) {
    if (this._count > 0) {
      this._cut();
    }
    done();
  }
}

/**
 * Преобразование входного потока байт сжатого алгоримом RLE к строке
 */
class RLEToString extends Transform {
  constructor(options) {
    super(options);

    this._count = 0;
  }

  /**
   * @param {Buffer} chunk
   */
  _transform(chunk, encoding, done) {
    for (let i = 0; i < chunk.length; i++) {
      if (this._count === 0) {
        this._count = chunk.readInt8(i);
        this.push(`${this._count}`);
      } else {
        this.push(String.fromCharCode(chunk.readInt8(i)));
        this._count = 0;
      }
    }
    done();
  }
}

/**
 * Распаковка входного потока байт сжатого алгоримом RLE
 */
class RLEUncompress extends Transform {
  /**
   * @param {Buffer} chunk
   */
  _transform(chunk, encoding, done) {
    const output = Buffer.from(chunk.toString().toLowerCase());
    this.push(output);
    done();
  }

  _flush(done) {
    done();
  }
}

/**
 * @param {string} inputPath Путь к входному файлу данных
 * @param {string} outputPath Путь к выходному файлу данных
 */
function compress(inputPath, outputPath) {
  const rstream = fs.createReadStream(inputPath);
  const wstream = fs.createWriteStream(outputPath || `${inputPath}.rle`);
  const compress = new RLECompress();
  const toString = new RLEToString();

  return rstream
    .pipe(compress)
    .pipe(toString)
    .pipe(wstream)
    .on("finish", function () {
      console.log(`[i] Compression is done with ${compress.compression.toPrecision(2)}% compression`);
    }).on("error", function (error) {
      console.log("[e] Compression is failed", error);
    });
}

/**
 * @param {string} inputPath Путь к входному файлу данных
 * @param {string} outputPath Путь к выходному файлу данных
 */
function uncompress(inputPath, outputPath) {
  const rstream = fs.createReadStream(inputPath);
  const wstream = fs.createWriteStream(outputPath);
  const uncompress = new RLEUncompress();

  return rstream
    .pipe(uncompress)
    .pipe(wstream)
    .on("finish", function () {
      console.log(`[i] Uncompression is done`);
    }).on("error", function (error) {
      console.log("[e] Uncompression is failed with error", error);
    });
}

const [_, SELF, OPTION_KEY = "c", INPUT_PATH, OUTPUT_PATH] = process.argv;
const INPUT_FILE_PATH = INPUT_PATH ? path.resolve(INPUT_PATH) : INPUT_PATH;
const OUPUT_FILE_PATH = OUTPUT_PATH ? path.resolve(OUTPUT_PATH) : OUTPUT_PATH;

if (OPTION_KEY.toLowerCase() === "c") {
  compress(INPUT_FILE_PATH, OUPUT_FILE_PATH)
} else {
  uncompress(INPUT_PATH, OUPUT_FILE_PATH);
}
