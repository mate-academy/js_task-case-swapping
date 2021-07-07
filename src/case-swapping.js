'use strict';

/**
 * Implement swapCase function:
 *
 * Given a string, swap the case for each of the letters.
 *
 * Examples:
 * swapCase "aBc"      should return "AbC"
 * swapCase "ABC"      should return "abc"
 * swapCase "123235"   should return "123235"
 *
 * @param {string} phrase
 *
 * @return {string}
 */
function swapCase(phrase) {
  let resultStr = '';
  for (const letter of phrase) {
    if (letter.match(/[a-z]/)) {
      resultStr += letter.toUpperCase();
    } else if (letter.match(/[A-Z]/)) {
      resultStr += letter.toLowerCase();
    } else {
      resultStr += letter;
    }
  }
  return resultStr;
}

module.exports = swapCase;
