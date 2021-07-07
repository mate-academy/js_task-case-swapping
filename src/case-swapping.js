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
  return phrase.split('').map(char => {
    if (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91) {
      return String.fromCharCode(char.charCodeAt(0) + 32);
    }
    if (char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123) {
      return String.fromCharCode(char.charCodeAt(0) - 32);
    }
    return char;
  }).join('');
}

module.exports = swapCase;
