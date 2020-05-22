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
  const swapPhrase = phrase.toLowerCase();
  let resultPhrase = '';

  for (let i = 0; i < swapPhrase.length; i++) {
    if (swapPhrase[i] === phrase[i]) {
      resultPhrase += swapPhrase[i].toUpperCase();
    } else {
      resultPhrase += phrase[i].toLowerCase();
    }
  }

  return resultPhrase;
}

module.exports = swapCase;
