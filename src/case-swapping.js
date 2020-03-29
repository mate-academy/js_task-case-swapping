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
  const parsePhrase = phrase.split('');

  for (let i = 0; i < phrase.length; i++) {
    if (parsePhrase[i] === parsePhrase[i].toUpperCase()) {
      parsePhrase[i] = parsePhrase[i].toLowerCase();
    } else {
      parsePhrase[i] = parsePhrase[i].toUpperCase();
    }
  }

  return parsePhrase.join('');
}

module.exports = swapCase;
