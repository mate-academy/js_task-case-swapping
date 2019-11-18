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
  const str = phrase.split('');
  const result = [];

  for (const each of str) {
    if (each === each.toLowerCase()) {
      result.push(each.toUpperCase());
    } else

    if (each === each.toUpperCase()) {
      result.push(each.toLowerCase());
    }
  }
  return result.join('');
}

module.exports = swapCase;
