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
  const res = [];

  phrase.split('').map(item => {
    if (item === item.toLowerCase()) {
      res.push(item.toUpperCase());
    } else {
      res.push(item.toLowerCase());
    }
  });

  return res.join('');
}

module.exports = swapCase;
