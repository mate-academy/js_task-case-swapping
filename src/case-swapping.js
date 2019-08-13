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
  return phrase
    .split('')
    .map(elem =>
      elem === elem.toUpperCase()
        ? elem.toLowerCase()
        : elem === elem.toLowerCase()
          ? elem.toUpperCase()
          : elem
    )
    .join('');
}

module.exports = swapCase;
