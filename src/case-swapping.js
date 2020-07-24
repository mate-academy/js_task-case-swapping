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
  let newPhrase = '';
  const regExp = /[A-Z]/g;

  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i].match(regExp)) {
      newPhrase += phrase[i].toLowerCase();
    } else {
      newPhrase += phrase[i].toUpperCase();
    }
  }

  return newPhrase;
}

module.exports = swapCase;
