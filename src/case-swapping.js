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
  // write code here
  if (!isNaN(phrase)) {
    return phrase;
  } else {
    const arrowPhrase = phrase.split('');
    let resultPhrase = '';

    for (let i = 0; i < arrowPhrase.length; i++) {
      if (arrowPhrase[i] === arrowPhrase[i].toUpperCase()) {
        (arrowPhrase[i] = arrowPhrase[i].toLowerCase());
      } else if (arrowPhrase[i] === arrowPhrase[i].toLowerCase()) {
        (arrowPhrase[i] = arrowPhrase[i].toUpperCase());
      }
    }

    resultPhrase = arrowPhrase.join('');
    return resultPhrase;
  }
}

module.exports = swapCase;
