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
  let newStr = '';

  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i].toLowerCase() === phrase[i]) {
      newStr += phrase[i].toUpperCase();
    } else {
      newStr += phrase[i].toLowerCase();
    }
  }

  return newStr;
}

module.exports = swapCase;
