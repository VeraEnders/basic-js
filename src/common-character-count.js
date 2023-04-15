const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let objChars = {};
  for (let charS1 of s1) {
    objChars[charS1] = (objChars[charS1] || 0) + 1;
  }
  let commonChars = 0;
  for (let charS2 of s2) {
    if (objChars[charS2] > 0) {
      commonChars++;
      objChars[charS2]--;
    }
  }
  return commonChars;
}

module.exports = {
  getCommonCharacterCount
};