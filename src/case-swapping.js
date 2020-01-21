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
  let swapped = '';

  for (let i = 0; i < phrase.length; i++) {
    const letter = phrase[i];

    if (letter === letter.toUpperCase()) {
      swapped += letter.toLowerCase();
    } else {
      swapped += letter.toUpperCase();
    }
  }

  return swapped;
}

module.exports = swapCase;
