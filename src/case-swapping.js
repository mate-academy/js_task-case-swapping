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
  let result = '';
  for (let i = 0; i < phrase.length; i++) {
    if (phrase.charCodeAt(i) > 64 && phrase.charCodeAt(i) < 91) {
      result += String.fromCharCode(phrase.charCodeAt(i) + 32);
    } else if (phrase.charCodeAt(i) > 96 && phrase.charCodeAt(i) < 123) {
      result += String.fromCharCode(phrase.charCodeAt(i) - 32);
    } else {
      result += phrase[i];
    }
  }

  return result;
}

module.exports = swapCase;
