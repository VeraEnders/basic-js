const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  if (domains.length == 0) return {};
  let obj = {};
  let arrSplitted = domains.map(i => i.split("."));

  for (let arr of arrSplitted) {
    arr.reverse();
    let arrBefore = "";
    for (let i = 0; i < arr.length; i++) {
      let x = `.${arr[i]}`;
      if (arrBefore.length !== 0) {
        arrBefore += `.${arr[i]}`;
      } else {
        arrBefore = `.${arr[i]}`;
      }
      obj[arrBefore] === undefined ? obj[arrBefore] = 1 : obj[arrBefore]++;
    }
  }
  return obj;
}

module.exports = {
  getDNSStats
};
