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

  for (const symbol of phrase) {
    const symbolCheck = symbol.toUpperCase();

    if (symbolCheck === symbol) {
      newPhrase += symbolCheck.toLocaleLowerCase();
    } else {
      newPhrase += symbolCheck.toUpperCase();
    }
  }

  return newPhrase;
}

module.exports = swapCase;
