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
const swapCase = phrase => phrase.split('').map(x => (/[a-z]/g)
  .test(x) ? x.toUpperCase() : x.toLowerCase()).join('');

module.exports = swapCase;
