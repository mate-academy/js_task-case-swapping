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
  const res = phrase.split('');

  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] >= 'A' && phrase[i] <= 'Z') {
      res[i] = phrase[i].toLowerCase();
    } else if (phrase[i] >= 'a' && phrase[i] <= 'z') {
      res[i] = phrase[i].toUpperCase();
    }
  }

  return res.join('');
}

module.exports = swapCase;
