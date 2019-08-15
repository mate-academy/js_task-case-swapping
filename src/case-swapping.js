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
  let swappedPhrase = '';

  Array.from(phrase).forEach(char => {
    if (!regLetter.test(char) || regNumber.test(char)) {
      swappedPhrase = swappedPhrase.concat(char);
    } else if (char === char.toLowerCase()) {
      swappedPhrase = swappedPhrase.concat(char.toUpperCase());
    } else if (char === char.toUpperCase()) {
      swappedPhrase = swappedPhrase.concat(char.toLowerCase());
    }
  });

  return swappedPhrase;
}

module.exports = swapCase;
