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
  const letters = phrase.split('');

  for (let char = 0; char < letters.length; char++) {
    if (letters[char].charCodeAt(0) >= 97
        && letters[char].charCodeAt(0) <= 122) {
      letters[char] = letters[char].toUpperCase();
    } else {
      letters[char] = letters[char].toLowerCase();
    }
  }
  return letters.join('');
}

module.exports = swapCase;
