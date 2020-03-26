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

  for (const value of phrase) {
    if (value === value.toLowerCase()) {
      str += value.toUpperCase();
    } else {
      str += value.toLowerCase();
    }
  }

  return str;
}

module.exports = swapCase;
