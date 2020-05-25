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
  const phraseInput = phrase;
  let phraseSwapped = '';

  for (let i = 0; i < phraseInput.length; i++) {
    if (phraseInput[i] === phraseInput[i].toUpperCase()) {
      phraseSwapped += phraseInput[i].toLowerCase();
    } else {
      phraseSwapped += phraseInput[i].toUpperCase();
    }
  }

  return phraseSwapped;
}

module.exports = swapCase;
