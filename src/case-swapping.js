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
  let swapped = '';

  for (let i = 0; i < phrase.length; i++) {
    const items = phrase[i];

    if (items === items.toUpperCase()) {
      swapped += items.toLowerCase();
    } else {
      swapped += items.toUpperCase();
    }
  }

  return swapped;
}

module.exports = swapCase;
