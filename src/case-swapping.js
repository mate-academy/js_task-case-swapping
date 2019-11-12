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
  const phraseNormalize = phrase.toLowerCase();
  const reverseCase = [];
  for (let i = 0; i < phrase.length; i++) {
    if (phraseNormalize[i] === phrase[i]) {
      reverseCase.push(phrase[i].toUpperCase());
    } else {
      reverseCase.push(phrase[i].toLowerCase());
    }
  }
  return reverseCase.join('');
}

module.exports = swapCase;
