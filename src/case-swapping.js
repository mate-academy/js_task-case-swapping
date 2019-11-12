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
  const myPhrase = phrase.split('');
  for (let i = 0; i < myPhrase.length; i++) {
    if (myPhrase[i].match(/[a-zA-z]/g) !== null) {
      if (myPhrase[i].match(/[a-z]/g) !== null) {
        myPhrase.splice(i, 1, myPhrase[i].toUpperCase()); continue;
      }
      myPhrase.splice(i, 1, myPhrase[i].toLowerCase());
    }
  }
  return myPhrase.join('');
}

module.exports = swapCase;
