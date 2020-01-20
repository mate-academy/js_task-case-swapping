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
  let swapString = '';

  for (let i = 0; i < phrase.length; i++) {
    if ((phrase[i].charCodeAt() >= 65 && phrase[i].charCodeAt() <= 90)
    || (phrase[i].charCodeAt() >= 97 && phrase[i].charCodeAt() <= 122)) {
      if (phrase[i] === phrase[i].toLowerCase()) {
        swapString += phrase[i].toUpperCase();
      } else {
        swapString += phrase[i].toLowerCase();
      }
    } else {
      swapString += phrase[i];
    }
  }

  return swapString;
}

module.exports = swapCase;
