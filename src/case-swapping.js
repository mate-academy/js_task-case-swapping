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
  // const storage = new Set();
  let newWord = '';

  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] === phrase[i].toLowerCase()) {
      newWord += phrase[i].toUpperCase();
    } else {
      newWord += phrase[i].toLowerCase();
    }
  }

  return newWord;
}

module.exports = swapCase;
