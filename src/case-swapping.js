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
  // write code here
  const phraseArr = phrase.split('');
  const regUp = /[A-Z]/g;
  const regLow = /[a-z]/g;

  for (let i = 0; i < phraseArr.length; i++) {
    if (phraseArr[i].match(regUp)) {
      phraseArr[i] = phraseArr[i].toLowerCase();
    } else if (phraseArr[i].match(regLow)) {
      phraseArr[i] = phraseArr[i].toUpperCase();
    }
  }

  return phraseArr.join('');
}

module.exports = swapCase;
