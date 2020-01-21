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
  let resultPhrase = '';

  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] === phrase[i].toLowerCase()) {
      resultPhrase += phrase[i].toUpperCase();
    } else {
      resultPhrase += phrase[i].toLowerCase();
    }
  }

  return resultPhrase;
}
module.exports = swapCase;
