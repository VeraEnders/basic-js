const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let resultStr = '';
  let cnt = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      cnt++;
    } else {
      resultStr += (cnt > 1 ? cnt : '') + str[i];
      cnt = 1;
    }
  }
  return resultStr;
}

module.exports = {
  encodeLine
};