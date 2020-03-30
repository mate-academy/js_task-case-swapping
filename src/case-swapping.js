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
  let newStr = '';
  let smallLetter = '';
  let bigLetter = '';

  for (let i = 0; i < phrase.length; i++) {
    smallLetter = phrase[i].toLowerCase();
    bigLetter = phrase[i].toUpperCase();

    if (phrase[i] === bigLetter) {
      newStr += smallLetter;
      continue;
    }
    newStr += bigLetter;
  }

  return newStr;
}

module.exports = swapCase;
