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
  const splittedPhrase = phrase.split('');
  for (let i = 0; i < splittedPhrase.length; i++) {
    if (splittedPhrase[i] === splittedPhrase[i].toUpperCase()) {
      splittedPhrase[i] = splittedPhrase[i].toLowerCase();
    } else {
      splittedPhrase[i] = splittedPhrase[i].toUpperCase();
    }
  }
  return splittedPhrase.join('');
}

module.exports = swapCase;
