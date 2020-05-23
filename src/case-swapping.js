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
  let phraseArray = phrase.split('');

  phraseArray = phraseArray.map(letter => {
    const letterTemp = letter;
    let swapLetter = '';

    if (letter === letterTemp.toUpperCase()) {
      swapLetter = letter.toLowerCase();
    } else if (letter === letterTemp.toLowerCase()) {
      swapLetter = letter.toUpperCase();
    } else {
      swapLetter = letter;
    }

    return swapLetter;
  });

  return phraseArray.join('');
}

module.exports = swapCase;
