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
  let result = '';

  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i].toUpperCase() === phrase[i]) {
      result += phrase[i].toLowerCase();
    } else {
      result += phrase[i].toUpperCase();
    }
  }

  return result;
}

// (phrase.codePointAt(i) >= 65 && phrase.codePointAt(i) <= 90)

module.exports = swapCase;
