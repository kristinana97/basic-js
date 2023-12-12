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
  
    const charCountMap1 = getCharacterCountMap(s1);
    const charCountMap2 = getCharacterCountMap(s2);
  
    let commonCount = 0;
  
    for (const char in charCountMap1) {
      if (charCountMap2.hasOwnProperty(char)) {
        commonCount += Math.min(charCountMap1[char], charCountMap2[char]);
      }
    }
  
    return commonCount;
  }
  
  function getCharacterCountMap(str) {
    const charCountMap = {};
  
    for (const char of str) {
      charCountMap[char] = (charCountMap[char] || 0) + 1;
    }
  
    return charCountMap;
  
}

module.exports = {
  getCommonCharacterCount
};
