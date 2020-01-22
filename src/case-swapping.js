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

  for (let j = 0; j < phraseArray.length; j++) {
    if (phraseArray[j].toUpperCase() === phraseArray[j]) {
      phraseArray[j] = phraseArray[j].toLowerCase();
    } else {
      phraseArray[j] = phraseArray[j].toUpperCase();
    }
  }

  return phraseArray.join('');
}

module.exports = swapCase;
