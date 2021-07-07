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
  let swappedString = '';

  for (const i of phrase) {
    swappedString += swapCharCase(i);
  }

  return swappedString;
}

function swapCharCase(character) {
  return (
    character.toLowerCase() === character ? character.toUpperCase()
      : character.toLowerCase()
  );
}

module.exports = swapCase;
