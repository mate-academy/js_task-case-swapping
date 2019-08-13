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
  const letters = phrase.split('');
  return letters.map(letter => {
    return letter.toUpperCase() === letter
      ? letter.toLowerCase()
      : letter.toUpperCase();
  }).join('');
}

module.exports = swapCase;
