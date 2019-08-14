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
  const array = phrase.split('');

  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i].toLowerCase()) {
      array[i] = array[i].toUpperCase();
    } else {
      array[i] = array[i].toLowerCase();
    }
  }

  return array.join('');
}

module.exports = swapCase;
