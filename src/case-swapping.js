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
  // write code here
  let caseInvertPhrase = '';

  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i].match(/[A-Z]/)) {
      caseInvertPhrase += phrase[i].toLowerCase();
    } else if (phrase[i].match(/[a-z]/)) {
      caseInvertPhrase += phrase[i].toUpperCase();
    } else {
      caseInvertPhrase += phrase[i];
    }
  }

  return caseInvertPhrase;
}

module.exports = swapCase;
