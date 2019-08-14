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
  const arrPhraseLetters = phrase.split('');

  for (let i = 0; i < arrPhraseLetters.length; i++) {
    if (arrPhraseLetters[i] === arrPhraseLetters[i].toLowerCase()) {
      arrPhraseLetters[i] = arrPhraseLetters[i].toUpperCase();
    } else {
      arrPhraseLetters[i] = arrPhraseLetters[i].toLowerCase();
    }
  }

  return arrPhraseLetters.join('');
}

module.exports = swapCase;
