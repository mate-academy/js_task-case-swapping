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
  let requiredString = '';

  for (const letter of phrase) {
    if (letter === letter.toUpperCase()) {
      requiredString += letter.toLowerCase();
    } else {
      requiredString += letter.toUpperCase();
    }
  }

  return requiredString;
}

module.exports = swapCase;
