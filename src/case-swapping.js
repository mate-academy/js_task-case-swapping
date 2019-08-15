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
  const phraseSplit = phrase.split('');
  for (let i = 0; i < phraseSplit.length; i++) {
    if (phraseSplit[i] === phraseSplit[i].toUpperCase()) {
      phraseSplit[i] = phraseSplit[i].toLowerCase();
    } else {
      phraseSplit[i] = phraseSplit[i].toUpperCase();
    };
  };

  return phraseSplit.join('');
}

module.exports = swapCase;
