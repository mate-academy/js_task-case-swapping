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
  const phraseToUpperCase = phrase.toLocaleUpperCase();
  const swapedCase = [];

  for (let i = 0; i < phrase.length; i++) {
    if (phraseToUpperCase[i] === phrase[i]) {
      swapedCase.push(phraseToUpperCase[i].toLowerCase());
    } else {
      swapedCase.push(phraseToUpperCase[i].toUpperCase());
    }
  }

  return swapedCase.join('');
}

module.exports = swapCase;
