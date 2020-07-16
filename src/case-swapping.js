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
  if (isFinite(phrase)) {
    return phrase;
  } else {
    const arrPhrase = phrase.split('');

    for (let i = 0; i < phrase.length; i++) {
      if (arrPhrase[i] === arrPhrase[i].toUpperCase()) {
        arrPhrase[i] = arrPhrase[i].toLowerCase();
      } else {
        arrPhrase[i] = arrPhrase[i].toUpperCase();
      }
    }

    return arrPhrase.join('');
  }
}

module.exports = swapCase;
