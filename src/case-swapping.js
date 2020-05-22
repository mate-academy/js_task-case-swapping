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
  let string = '';

  for (const letter of phrase) {
    if (letter === letter.toUpperCase()) {
      string += letter.toLowerCase();
    } else {
      string += letter.toUpperCase();
    }
  }

  return string;
}

module.exports = swapCase;
