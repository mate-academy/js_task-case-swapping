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
  let modifyPhrase = '';
  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] >= 'a' && phrase[i] <= 'z') {
      modifyPhrase += phrase[i].toUpperCase();
      continue;
    }

    if (phrase[i] >= 'A' && phrase[i] <= 'Z') {
      modifyPhrase += phrase[i].toLowerCase();
      continue;
    }

    modifyPhrase += phrase[i];
  }
  return modifyPhrase;
}

module.exports = swapCase;
