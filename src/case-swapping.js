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
  const newPhrase = phrase.split('');
  for (let i = 0; i < newPhrase.length; i++) {
    if (newPhrase[i] === newPhrase[i].toUpperCase()) {
      newPhrase[i] = newPhrase[i].toLowerCase();
    } else {
      newPhrase[i] = newPhrase[i].toUpperCase();
    }
  }
  return newPhrase.join('');
}

module.exports = swapCase;
