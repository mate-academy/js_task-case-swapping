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
  let tempArray = '';

  for (let i = 0; i < phraseArray.length; i++) {
    if (phraseArray[i] === phraseArray[i].toUpperCase()) {
      tempArray += phraseArray[i].toLowerCase();
    } else {
      tempArray += phraseArray[i].toUpperCase();
    }
  }

  return tempArray;
}

module.exports = swapCase;
