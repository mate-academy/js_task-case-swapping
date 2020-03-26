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
  const array = phrase.split('');
  const answer = [];

  array.map(x => {
    if (x === x.toLowerCase()) {
      answer.push(x.toUpperCase());
    } else {
      (
        answer.push(x.toLowerCase())
      );
    }
  });

  return answer.join('');
}

module.exports = swapCase;
