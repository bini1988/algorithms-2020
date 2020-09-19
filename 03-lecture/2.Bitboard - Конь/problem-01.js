
function knight(n) {
  const board = 0x0000_0000_0000_0001n << n;
  const bounds = 0xFFFF_FFFF_FFFF_FFFFn;

  const kL1 = board & 0xFEFE_FEFE_FEFE_FEFEn;
  const kL2 = board & 0xFCFC_FCFC_FCFC_FCFCn;
  const kR1 = board & 0x7F7F_7F7F_7F7F_7F7Fn;
  const kR2 = board & 0x3F3F_3F3F_3F3F_3F3Fn;

  const mask = (
    (kL1 << 15n) | (kR1 << 17n) |
    (kL2 << 6n)  | (kR2 << 10n) |
    /*         knight         */
    (kL2 >> 10n) | (kR2 >> 6n)  |
    (kL1 >> 17n) | (kR1 >> 15n)
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
  return knight(BigInt(line));
};
