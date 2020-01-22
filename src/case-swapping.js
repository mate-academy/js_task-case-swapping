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
  let newString = '';

  for (let j = 0; j < phrase.length; j++) {
    if (phrase[j].toUpperCase() === phrase[j]) {
      newString = newString + phrase[j].toLowerCase();
    } else {
      newString = newString + phrase[j].toUpperCase();
    }
  }

  return newString;
}

module.exports = swapCase;
