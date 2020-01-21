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
  const letter = phrase.split('');

  return letter.map(x =>
    x.toLowerCase() === x
      ? x.toUpperCase()
      : x.toLowerCase()
  ).join('');
}

module.exports = swapCase;
