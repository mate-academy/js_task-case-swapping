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
  let str = '';

  for (const letter of phrase) {
    if (letter.toUpperCase() === letter) {
      str += letter.toLowerCase();
    } else {
      str += letter.toUpperCase();
    }
  }

  return str;
}

module.exports = swapCase;
