
/**
 * Проверка строк на равенство
 * @param {string} a
 * @param {string} b
 */
function equal(a = "", b = "") {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}


module.exports = { equal };
