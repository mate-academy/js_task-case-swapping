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
  let phraseGivingOut = '';
  for (const char of phrase) {
    if (char.toLowerCase().includes(char)) {
      phraseGivingOut += char.toUpperCase();
    } else {
      phraseGivingOut += char.toLowerCase();
    }
  }
  return phraseGivingOut;
}

module.exports = swapCase;
