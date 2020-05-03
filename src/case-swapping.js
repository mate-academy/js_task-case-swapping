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
  const stringArray = Array.from(phrase);
  let result = '';

  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === stringArray[i].toUpperCase()) {
      result += stringArray[i].toLowerCase();
    } else {
      result += stringArray[i].toUpperCase();
    }
  }

  return result;
}

module.exports = swapCase;
