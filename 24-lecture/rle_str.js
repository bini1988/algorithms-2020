
/**
 * Переданное значение находится в заданном диапазоне
 */
function at(value, min, max) {
  return value > min && value < max;
}

/**
 * Кодирует переданную строку алгоритмом сжатия данных RLE (run-lenght encoding)
 * @param {Buffer} str Кодируемая строка
 * @returns {Buffer}
 */
function rle_encode(buf) {
  let N = buf.length;
  let out = [];
  let i = 0, j = 0;
  let c = 0, c_i = 0;

  while (i < N) {
    for (c = 1; i + 1 < N && at(c, 0, 127); i++, c++) {
      if (buf[i] !== buf[i + 1]) break;
    }
    if (c === 1 && at(out[c_i], -128, 0)) {
      out[c_i] -= 1;
    } else {
      c_i = j;
      out[j++] = c === 1 ? -1 : c;
    }
    out[j++] = buf[i++];
  }

  return Buffer.from(out);
}

/**
 * Декодирует переданные байты в строку сжатую алгоритмом сжатия данных RLE (run-lenght encoding)
 * @param {Buffer} buf
 * @returns {Buffer}
 */
function rle_decode(buf) {
  let N = buf.length;
  let out = [];
  let i = 0, j = 0, c = 0, k = 0;

  while (i < N) {
    c = buf.readInt8(i++);

    for (; c < 0; c++, i++) {
      out[j++] = buf.readInt8(i);
    }
    for (k = i + 1; c > 0; c--, i = k) {
      out[j++] = buf.readInt8(k - 1);
    }
  }

  return Buffer.from(out);
}

module.exports = { rle_encode, rle_decode };
