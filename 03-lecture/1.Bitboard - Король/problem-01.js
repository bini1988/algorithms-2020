
function king(n) {
  const board = 0x0000_0000_0000_0001n << n;
  const bounds = 0xFFFF_FFFF_FFFF_FFFFn;

  const kL = board & 0xFEFE_FEFE_FEFE_FEFEn;
  const kR = board & 0x7F7F_7F7F_7F7F_7F7Fn;
  const mask = (
    (kL << 7n) | (board << 8n) | (kR << 9n) |
    (kL >> 1n) | /*   king    */ (kR << 1n) |
    (kL >> 9n) | (board >> 8n) | (kR >> 7n)
  ) & bounds;

  let count = 0n;
  let value = mask;

  while(value) {
    value &= (value - 1n);
    count++;
  }
  return [count, mask];
}

module.exports = function ([line]) {
  return king(BigInt(line));
};
