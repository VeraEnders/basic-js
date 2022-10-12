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
  if (str == '') return '';
  let result = '', 
      cnt = 1, 
      letter = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== letter && cnt === 1)  {
      result += str[i - 1];
      letter = str[i];
      cnt = 1;
    } else if (str[i] !== letter && cnt > 1) {
      result += cnt + letter;
      letter = str[i];
      cnt = 1;
    } else {
      cnt++;  
    }
  }
  if (cnt === 1) {
    result += letter;
  } else {
    result += cnt + letter;
  }
  return result;
}

module.exports = {
  encodeLine
};
