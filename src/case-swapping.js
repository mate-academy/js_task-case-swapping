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
  let resultPhrase = '';

  for (let i = 0; i < phrase.length; i++) {
    const latter = phrase.charAt(i);
    const codeLatter = phrase.charCodeAt(i);
    if (codeLatter >= 65 && codeLatter <= 90) {
      resultPhrase += `${latter.toLowerCase()}`;
    } else if (codeLatter >= 97 && codeLatter <= 122) {
      resultPhrase += `${latter.toUpperCase()}`;
    } else {
      resultPhrase += `${latter}`;
    }
  }

  return resultPhrase;
}

module.exports = swapCase;
