const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let resultStr = '';
  let additionResultStr = '';
  if (options.addition !== undefined) {
    additionResultStr = (options.addition + (options.additionSeparator || '|')).repeat(options.additionRepeatTimes - 1) + options.addition;
  }
  resultStr = (str + additionResultStr + (options.separator || '+')).repeat(options.repeatTimes - 1) + (str + additionResultStr);
  return resultStr;
}

module.exports = {
  repeater
};