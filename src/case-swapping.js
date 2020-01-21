'use strict';

/**
 * fs_on_dec19_salogubova
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
  let resultPhrase = '';

  for (const symbol of phrase) {
    if (symbol === symbol.toLowerCase()) {
      resultPhrase = resultPhrase + symbol.toUpperCase();
    } else {
      resultPhrase = resultPhrase + symbol.toLowerCase();
    }
  }

  return resultPhrase;
}

module.exports = swapCase;
