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
  const invertedCasePhrase = [];

  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] === phrase[i].toLowerCase()) {
      invertedCasePhrase.push(phrase[i].toUpperCase());
    } else {
      invertedCasePhrase.push(phrase[i].toLowerCase());
    }
  }
  return invertedCasePhrase.join('');
}

module.exports = swapCase;
