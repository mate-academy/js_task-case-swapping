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
  // write code here
  let swappedPhrase = '';

  for (const symbol of phrase) {
    const symbolCheck = symbol.toUpperCase();

    if (symbolCheck === symbol) {
      swappedPhrase += symbolCheck.toLowerCase();
    } else {
      swappedPhrase += symbolCheck;
    }
  }

  return swappedPhrase;
}

module.exports = swapCase;
