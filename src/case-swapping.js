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
  let tempPhrase = '';

  for (let i = 0; i < phrase.length; ++i) {
    if (phrase[i].toUpperCase() === phrase[i]) {
      tempPhrase += phrase[i].toLowerCase();
    } else {
      tempPhrase += phrase[i].toUpperCase();
    }
  }

  return tempPhrase;
}

module.exports = swapCase;
