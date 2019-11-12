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
  let swaped = '';

  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] >= 'A' && phrase[i] <= 'Z') {
      swaped += phrase[i].toLowerCase();
    } else if (phrase[i] >= 'a' && phrase[i] <= 'z') {
      swaped += phrase[i].toUpperCase();
    } else {
      swaped += phrase[i];
    }
  }

  return swaped;
}

module.exports = swapCase;
