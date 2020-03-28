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
  return phrase.split("").map(item => {
                                if (item === item.toUpperCase()) {
                                  return item.toLowerCase();
                                } else {
                                  return item.toUpperCase();
                                }
                              })
                              .join("");
}

module.exports = swapCase;
