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
const swapCase = phrase => phrase.split('').map(letter => (/[a-z]/g)
  .test(letter) ? letter.toUpperCase() : letter.toLowerCase()).join('');

module.exports = swapCase;
