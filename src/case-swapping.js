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
  let caseSwappedPhrase = '';
  for (let i = 0; i < phrase.length; i++) {
    const word = phrase[i];
    if (word.toUpperCase() === word) {
      caseSwappedPhrase += word.toLowerCase();
    } else {
      caseSwappedPhrase += word.toUpperCase();
    }
  }
  return caseSwappedPhrase;
  // write code here
}

module.exports = swapCase;
