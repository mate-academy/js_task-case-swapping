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
  let swap = '';

  for (let i = 0; i < phrase.length; i++) {
    const charAt = phrase.charCodeAt(i);

    if (charAt > 64 && charAt < 91) {
      swap = swap + String.fromCharCode(charAt + 32);
    } else if (charAt > 96 && charAt < 123) {
      swap = swap + String.fromCharCode(charAt - 32);
    } else {
      swap = swap + phrase[i];
    }
  }

  return swap;
}

module.exports = swapCase;
