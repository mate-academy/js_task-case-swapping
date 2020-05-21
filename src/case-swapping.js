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
  const arr = phrase.split('');
  const swapArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      swapArr.push(arr[i].toLowerCase());
    } else if (arr[i] === arr[i].toLowerCase()) {
      swapArr.push(arr[i].toUpperCase());
    }
  }

  return swapArr.join('');
}

module.exports = swapCase;
