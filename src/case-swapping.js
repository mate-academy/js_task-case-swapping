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
  const phraseLetters = phrase.split('');
  let result;

  if (phrase === '') {
    result = phrase;
  }

  for (let i = 0; i < phraseLetters.length; i += 1) {
    if (phraseLetters[i].toUpperCase() !== phraseLetters[i]) {
      phraseLetters[i] = phraseLetters[i].toUpperCase();
    } else if (phraseLetters[i].toLowerCase() !== phraseLetters[i]) {
      phraseLetters[i] = phraseLetters[i].toLowerCase();
    }

    result = phraseLetters.join('');
  }

  return result;
}

module.exports = swapCase;
