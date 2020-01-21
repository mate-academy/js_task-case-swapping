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
  let newPhrase = '';

  for (const letter of phrase) {
    (letter === letter.toLowerCase())
      ? newPhrase = newPhrase + letter.toUpperCase()
      : newPhrase = newPhrase + letter.toLowerCase();
  }

  return newPhrase;
}

module.exports = swapCase;
