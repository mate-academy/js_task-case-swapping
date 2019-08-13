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
  let tempArr = '';

  for (const char of phrase) {
    if (char.toUpperCase() === char) {
      tempArr += char.toLowerCase();
    } else {
      tempArr += char.toUpperCase();
    }
  }

  return tempArr;
}

module.exports = swapCase;
