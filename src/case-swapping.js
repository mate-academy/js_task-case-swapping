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
  const str = phrase.split('');
  const res = [];

  for (let i = 0; i < phrase.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      res.push(str[i].toUpperCase());
    } else {
      res.push(str[i].toLowerCase());
    }
  }

  return res.join('');
}

module.exports = swapCase;
