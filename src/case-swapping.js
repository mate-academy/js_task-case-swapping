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
  let results = '';
  for (let i = 0; i < phrase.length; i++) {
    if ((phrase.charCodeAt(i) >= 97) && (phrase.charCodeAt(i) <= 122)) {
      results += phrase.charAt(i).toUpperCase();
    } else {
      results += phrase.charAt(i).toLowerCase();
    }
  }
  return results;
}

module.exports = swapCase;
