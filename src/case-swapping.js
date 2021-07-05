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
  let strSwap = '';
  const phraseLower = phrase.toLocaleLowerCase();
  phraseLower.split('').forEach((item, index) => {
    if (item === phrase[index]) {
      strSwap += item.toUpperCase();
    } else {
      strSwap += item;
    }
  });

  return strSwap;
}

module.exports = swapCase;
