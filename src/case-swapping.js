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
  const sybmols = phrase.split('');

  for (let i = 0; i < sybmols.length; i++) {
    if (sybmols[i].charCodeAt() > 96) {
      sybmols[i] = sybmols[i].toUpperCase();
    } else {
      sybmols[i] = sybmols[i].toLowerCase();
    }
  }

  return sybmols.join('');
}

module.exports = swapCase;
