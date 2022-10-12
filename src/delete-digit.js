const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let str = n.toString();
  let arr = [];
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j < str.length; j++) {
      let item;
      if (Number(str[j]) === i) {
        item = Number(str.replace(str[j], ''));
        arr.push(item);
      }
    }
  }
  return Math.max(...arr);
}


module.exports = {
  deleteDigit
};
