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
  let result = '';
  for (let i = 0; i < phraseArr.length; i++) {
    if (phraseArr[i] === phraseArr[i].toLowerCase()) {
      result += phraseArr[i].toUpperCase();
    } else {
      result += phraseArr[i].toLowerCase();
    }
  }
  return result;
}

module.exports = swapCase;
