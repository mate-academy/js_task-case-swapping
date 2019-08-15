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
  const regLetter = new RegExp('[a-zA-Z]');
  const regNumber = new RegExp('\\d');
  let result = '';

  Array.from(phrase).forEach(char => {
    if (!regLetter.test(char) || regNumber.test(char)) {
      result = result.concat(char);
    } else if (char === char.toLowerCase()) {
      result = result.concat(char.toUpperCase());
    } else if (char === char.toUpperCase()) {
      result = result.concat(char.toLowerCase());
    }
  });

  return result;
}

module.exports = swapCase;
