const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  } else {
    let convientedArr = arr.slice();
    for (let i = 0; i < convientedArr.length; i++) {
      if (convientedArr[i] === "--double-next") {
        if (convientedArr[i + 1] !== undefined) {
          convientedArr[i] = convientedArr[i + 1];
        } else {
          convientedArr[i] = "delete";
        }
      } else if (convientedArr[i] === "--double-prev") {
        if (convientedArr[i - 1] !== undefined) {
          convientedArr[i] = convientedArr[i - 1];
        } else {
          convientedArr[i] = "delete";
        }
      } else if (convientedArr[i] === "--discard-next") {
        if (convientedArr[i + 1] !== undefined) {
          convientedArr[i + 1] = "delete";
          convientedArr[i] = "delete";
        } else {
          convientedArr[i] = "delete";
        }
      } else if (convientedArr[i] === "--discard-prev") {
        if (convientedArr[i - 1] !== undefined) {
          convientedArr[i - 1] = "delete";
          convientedArr[i] = "delete";
        } else {
          convientedArr[i] = "delete";
        }
      }
    }
    return convientedArr.filter((item) => item !== "delete");
  }
}
module.exports = {
  transform
};
