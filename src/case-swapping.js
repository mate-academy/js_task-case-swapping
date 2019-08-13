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
  const phraseArr = phrase.split('').map(function(letter) {
    return letter === letter.toUpperCase()
      ? letter.toLowerCase()
      : letter.toUpperCase();
  }).join('');

  return phraseArr;
}

module.exports = swapCase;
