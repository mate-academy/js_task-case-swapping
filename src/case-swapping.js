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
  let swapCasePhrase = '';

  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i].toUpperCase() === phrase[i]) {
      swapCasePhrase += phrase[i].toLowerCase();
    } else if (phrase[i].toLowerCase() === phrase[i]) {
      swapCasePhrase += phrase[i].toUpperCase();
    }
  }

  return swapCasePhrase;
}

module.exports = swapCase;
