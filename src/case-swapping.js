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
  const arr = phrase.split('').map(elem => {
    if (elem === elem.toLowerCase()) {
      return elem.toUpperCase();
    } else {
      return elem.toLowerCase();
    }
  });

  return arr.join('');
}

module.exports = swapCase;
