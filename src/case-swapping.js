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
  const arr = [];

  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] === phrase[i].toUpperCase()) {
      arr.push(phrase[i].toLowerCase());
    } else {
      arr.push(phrase[i].toUpperCase());
    }
  }

  return arr.join('');
}

module.exports = swapCase;
