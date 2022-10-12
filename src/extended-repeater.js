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
  let result = '',
      chunk = '',
      addChunk = '';
  let mainRepeatTimes = options.repeatTimes,
      separatorOfStr = options.separator,
      additionStr = options.addition,
      addSeparator = options.additionSeparator,
      addRepeatTimes = options.additionRepeatTimes;
  if (options.hasOwnProperty('addition')) {
    if (options.hasOwnProperty('additionRepeatTimes')) {
      if (options.hasOwnProperty('additionSeparator')) {
        addChunk = additionStr + addSeparator;
        addChunk = addChunk.repeat(addRepeatTimes - 1) + additionStr;
      } else {
        addChunk = additionStr + '|';
        addChunk = addChunk.repeat(addRepeatTimes - 1) + additionStr;
      }
    } else {
      addChunk = additionStr;
    }
  } 
  chunk = str + addChunk;
  if (options.hasOwnProperty('repeatTimes')) {
    let chunkWithSeparator;
    if (options.hasOwnProperty('separator')) {
      chunkWithSeparator = chunk + separatorOfStr;
      result = chunkWithSeparator.repeat(mainRepeatTimes - 1) + chunk;
    } else {
      chunkWithSeparator = chunk + '+';
      result = chunkWithSeparator.repeat(mainRepeatTimes - 1) + chunk;
    }
  } else {
    result = chunk;
  }
  return result; 
}

module.exports = {
  repeater
};
