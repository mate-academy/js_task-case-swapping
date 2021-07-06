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
  let invertedPhrase = '';

  for (const item of phrase) {
    if (item === item.toUpperCase()) {
      invertedPhrase += item.toLowerCase();
    } else {
      invertedPhrase += item.toUpperCase();
    }
  }

  return invertedPhrase;
}

module.exports = swapCase;
