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
const swapCase = (phrase) => {
  let newPhrase = '';
  for (const i in phrase) {
    if (phrase[i] === phrase[i].toUpperCase()) {
      newPhrase += phrase[i].toLowerCase();
      continue;
    }
    newPhrase += phrase[i].toUpperCase();
  }
  return newPhrase;
};

module.exports = swapCase;
