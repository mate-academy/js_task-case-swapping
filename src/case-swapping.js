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
  const lettersArr = phrase.split('');

  for (let i = 0; i < lettersArr.length; i++) {
    if (lettersArr[i] === lettersArr[i].toLowerCase()) {
      lettersArr[i] = lettersArr[i].toUpperCase();
    } else {
      lettersArr[i] = lettersArr[i].toLowerCase();
    }
  }

  return lettersArr.join('');
}
module.exports = swapCase;
