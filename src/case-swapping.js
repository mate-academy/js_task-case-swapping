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
  if (phrase.length === 0) {
    return '';
  }

  let swappedPhrase = '';

  for (let i = 0; i < phrase.length; i++) {
    const charCode = phrase.charCodeAt(i);

    if (charCode > 64 && charCode < 91) {
      swappedPhrase += phrase[i].toLowerCase();
    } else if (charCode > 96 && charCode < 123) {
      swappedPhrase += phrase[i].toUpperCase();
    } else {
      swappedPhrase += phrase[i];
    }
  }

  return swappedPhrase;
}

module.exports = swapCase;
