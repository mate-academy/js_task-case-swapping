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
  const phrase2 = phrase.split('');
  for (let i = 0; i < phrase2.length; i++) {
    if (phrase2[i] === phrase2[i].toUpperCase()) {
      phrase2[i] = phrase2[i].toLowerCase();
    } else {
      phrase2[i] = phrase2[i].toUpperCase();
    };
  };

  return phrase2.join('');
}

module.exports = swapCase;
