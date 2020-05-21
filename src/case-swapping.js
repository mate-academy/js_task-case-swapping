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
  const arr = [];
  const toggle = char => char === char.toUpperCase()
    ? char.toLowerCase() : char.toUpperCase();

  for (const char of phrase.split('')) {
    arr.push(toggle(char));
  }

  return arr.join('');
}

module.exports = swapCase;
