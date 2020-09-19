
class BitArray {
  constructor(size) {
    this.array = new Uint32Array(Math.ceil(size / 32));
  }

  /**
   * Вернуть значение i-го бита
   * @param {number} index
   */
  byIndex(index) {
    const byteIndex = ~~(index / 32);
    const byte = this.array[byteIndex];

    return byte & (0x1 << index % 32);
  }

  /**
   * Задать значение i-го бита в 1
   * @param {number} index
   */
  set(index) {
    const byteIndex = ~~(index / 32);
    const byte = this.array[byteIndex];

    this.array[byteIndex] = byte | (0x1 << index % 32);
    return this;
  }
}

/**
 * Количество простых чисел от 1 до N через решето Эратосфена
 * с оптимизацией памяти: битовая матрица, по 32 значений в одном int
 */
function prime(n) {
  let m = new BitArray(n + 1);
  let c = n - 1;

  // 0 - является простым числом
  // 1 - не является простым числом
  m.set(0).set(1);

  for(let i = 2; i * i <= n; i++) {
    if (m.byIndex(i)) { continue; }

    for(let j = i * i; j <= n; j += i) {
      if (!m.byIndex(j)) { m.set(j);  c--; }
    }
  }
  return c;
}

module.exports = function ([line1]) {
  const N = parseInt(line1, 10);

  return prime(N);
};
