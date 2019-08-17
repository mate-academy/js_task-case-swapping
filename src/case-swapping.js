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
  const phraseArray = phrase.split('');

  function isUpperCase(symbol) {
    return symbol === symbol.toUpperCase();
  }

  phraseArray.forEach(function(item, index, arr) {
    if (isUpperCase(item)) {
      arr[index] = item.toLowerCase();
    } else {
      arr[index] = item.toUpperCase();
    }
  });

  return phraseArray.join('');
}

module.exports = swapCase;
