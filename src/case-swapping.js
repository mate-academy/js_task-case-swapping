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
  let splitPhrase = phrase.split('');

  for (let i = 0; i < splitPhrase.length; i++) {
    if (splitPhrase[i] === splitPhrase[i].toUpperCase()) {
      splitPhrase[i] = splitPhrase[i].toLowerCase();
    } else {
      splitPhrase[i] = splitPhrase[i].toUpperCase();
    }
  }

  splitPhrase = splitPhrase.join('');

  return splitPhrase;
}

module.exports = swapCase;
