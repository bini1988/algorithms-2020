const { strictEqual} = require("assert");
const { rle_encode, rle_decode } = require("./rle_str");

/**
 * Возвращает массив байт для переданной строки
 * @param {string} str
 */
function toBuff(str) {
  return Buffer.from(str);
}

/**
 * Приводит массив байт к описывающий RLE проследовательность строке
 * @param {Buffer} buf
 */
function toRLEStr(buf) {
  let out = "";
  let N = buf.length;
  let i = 0, count = 0;

  while (i < N) {
    count = buf.readInt8(i++);
    out += `${count}`;

    while (count < 0) {
      out += String.fromCharCode(buf.readInt8(i++));
      count += 1;
    }
    if (count > 0) {
      out += String.fromCharCode(buf.readInt8(i++));
    }
  }
  return out;
}

describe("RLE", function () {
  it("Кодирование строки символов", function () {
    strictEqual(toRLEStr(rle_encode(toBuff(""))), "");
    strictEqual(toRLEStr(rle_encode(toBuff("WWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW"))), "9W3B24W-1B14W");
    strictEqual(toRLEStr(rle_encode(toBuff("A"))), "-1A");
    strictEqual(toRLEStr(rle_encode(toBuff("AABBCCDD"))), "2A2B2C2D");
    strictEqual(toRLEStr(rle_encode(toBuff("ABCABCABCDDDFFFFFF"))), "-9ABCABCABC3D6F");
    strictEqual(toRLEStr(rle_encode(toBuff("ABCD"))), "-4ABCD");
    strictEqual(toRLEStr(rle_encode(toBuff("ABBBBCD"))), "-1A4B-2CD");
    strictEqual(toRLEStr(rle_encode(toBuff("ABBBBCDDD"))), "-1A4B-1C3D");
  });
  it("Декодирование строки символов", function () {
    strictEqual(rle_decode(rle_encode(toBuff(""))).toString("utf-8"), "");
    strictEqual(rle_decode(rle_encode(toBuff("ABBBBCD"))).toString("utf-8"), "ABBBBCD");
    strictEqual(rle_decode(rle_encode(toBuff("ABBBBCDDD"))).toString("utf-8"), "ABBBBCDDD");
  });
  it("Декодирование строки одинаковых символов длиной 255 символов", function () {
    const str = Array.from({ length: 255 }).fill("A").join("");

    strictEqual(toRLEStr(rle_encode(toBuff(str))), "127A127A-1A");
  });
  it("Декодирование строки разных символов длиной 255 символов", function () {
    const str = Array.from({ length: 64 }).fill("ABC").join("");

    strictEqual(toRLEStr(rle_encode(toBuff(str))), `-128${str.slice(0, 128)}-64${str.slice(128)}`);
  });
});
