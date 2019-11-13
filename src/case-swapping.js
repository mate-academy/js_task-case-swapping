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
  let swaped = '';

  for (const char of phrase) {
    swaped += (char === char.toLowerCase())
      ? char.toUpperCase()
      : char.toLowerCase();
  }

  return swaped;
}

module.exports = swapCase;
