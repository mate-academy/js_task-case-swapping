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
  return phrase.split('').map(function(item) {
    if (item === item.toLowerCase()) {
      return item.toUpperCase();
    } else {
      return item.toLowerCase();
    }
  }).join('');
}

module.exports = swapCase;
