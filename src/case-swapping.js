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
  const phraseArr = phrase.split('');

  for (let i = 0; i < phraseArr.length; i++) {
    phraseArr[i] === phraseArr[i].toLowerCase()
      ? phraseArr[i] = phraseArr[i].toUpperCase()
      : phraseArr[i] = phraseArr[i].toLowerCase();
  }

  return phraseArr.join('');
}

module.exports = swapCase;
