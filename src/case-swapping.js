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
  let resultString = '';

  for (let i = 0; i < phrase.length; i += 1) {
    if (phrase[i] === phrase[i].toUpperCase()) {
      resultString += phrase[i].toLowerCase();
    } else {
      resultString += phrase[i].toUpperCase();
    }
  }

  return resultString;
};

module.exports = swapCase;
