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
  let result = "";
  for (let i = 0; i < phrase.length; i++) {
    let char = (phrase[i] === phrase[i].toUpperCase())
      ? phrase[i].toLowerCase() : phrase[i].toUpperCase();
    result = result + char;
  }
  return result;
}

module.exports = swapCase;
