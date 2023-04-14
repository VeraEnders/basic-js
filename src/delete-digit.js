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
  let numInStr = n.toString();
  if (+numInStr[0] < +numInStr[1]) return +(numInStr.slice(1));

  let indexDigit;
  for (let i = 1; i < numInStr.length; i++) {
    if (i === numInStr.length - 1 || +numInStr[i+1] > +numInStr[i]) {
      indexDigit = i;
      break;
    }
  }
  return +(numInStr.slice(0, indexDigit) + numInStr.slice(indexDigit + 1));
}


module.exports = {
  deleteDigit
};