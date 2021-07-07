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
  let result = '';

  if (phrase === '') {
    return result;
  }

  for (let i = 0; i < phrase.length; i++) {
    const checker = phrase[i];
    const upperLetterCheck = phrase[i].toUpperCase();
    const lowerLetterCheck = phrase[i].toLowerCase();

    if (checker === upperLetterCheck) {
      result += lowerLetterCheck;
    } else {
      result += upperLetterCheck;
    }
  }

  return result;
}

module.exports = swapCase;
