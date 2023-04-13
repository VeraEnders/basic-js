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
  let objDNSStats = {};

  for (let domain of domains) {
    let chunksDomain = domain.split('.').reverse();
    let currentStat = '';
    for (let chunk of chunksDomain) {
      currentStat += `.${chunk}`;
      objDNSStats[currentStat] = (objDNSStats[currentStat] || 0) + 1;
    }
  }
  return objDNSStats;
}

module.exports = {
  getDNSStats
};