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
    const {
      repeatTimes = 1,
      separator = '+',
      addition = '',
      additionRepeatTimes = 1,
      additionSeparator = '|',
    } = options || {};
  
    const stringToStr = String(str);
    const additionToStr = String(addition);
  
    const repetitions = [];
  
    for (let i = 0; i < repeatTimes; i++) {
      const additions = [];
      for (let j = 0; j < additionRepeatTimes; j++) {
        additions.push(additionToStr);
      }
      const repeatedAddition = additions.join(additionSeparator);
      repetitions.push(stringToStr + repeatedAddition);
    }
  
    const result = repetitions.join(separator);
  
    return result;
}

module.exports = {
  repeater
};
