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
  let str = '';

  for (let i = 0; i < phrase.length; i++) {
    if (isNaN(phrase.charAt(i) * 1)) {
      if (phrase.charAt(i) === phrase.charAt(i).toUpperCase()) {
        str = str + (phrase.charAt(i).toLowerCase());
      } else {
        str = str + (phrase.charAt(i).toUpperCase());
      }
    } else {
      str = str + (phrase.charAt(i));
    }
  }

  return str;
}

module.exports = swapCase;
