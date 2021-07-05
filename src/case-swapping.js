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
  let newPhrase = '';

  for (let i = 0; i < phrase.length; i++) {
    const lowerLetter = phrase[i].toLowerCase();
    const upperLetter = phrase[i].toUpperCase();

    phrase[i] === upperLetter
      ? newPhrase += lowerLetter
      : newPhrase += upperLetter;
  }

  return newPhrase;
}

module.exports = swapCase;
