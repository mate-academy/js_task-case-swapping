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
  const phraseArray = phrase.split('');

  for (let i = 0; i < phraseArray.length; i++) {
    if (phraseArray[i] === phraseArray[i].toLowerCase()) {
      phraseArray[i] = phraseArray[i].toUpperCase();
    } else {
      phraseArray[i] = phraseArray[i].toLowerCase();
    }
  }

  return phraseArray.join('');
}

module.exports = swapCase;
