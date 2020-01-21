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
  let swapPhrase = '';

  for (const symbol of phrase) {
    const symbolCode = symbol.charCodeAt(0);

    if (symbolCode >= 97 && symbolCode <= 122) {
      swapPhrase = swapPhrase + String.fromCharCode(symbolCode - 32);
    } else if (symbolCode >= 65 && symbolCode <= 90) {
      swapPhrase = swapPhrase + String.fromCharCode(symbolCode + 32);
    } else {
      swapPhrase = swapPhrase + symbol;
    }
  }

  return swapPhrase;
}

module.exports = swapCase;
