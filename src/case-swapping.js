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
  let swappedPhrase = '';

  for (const character of phrase) {
    if (character === character.toLowerCase()) {
      swappedPhrase += character.toUpperCase();
    } else {
      swappedPhrase += character.toLowerCase();
    }
  }

  return swappedPhrase;
}

module.exports = swapCase;
