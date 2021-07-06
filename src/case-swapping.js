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

// New solution:
function swapCase(phrase) {
  let swappedPhrase = '';

  for (const item of phrase) {
    if (item === item.toUpperCase()) {
      swappedPhrase += item.toLowerCase();
    } else {
      swappedPhrase += item.toUpperCase();
    }
  }

  return swappedPhrase;
}

// // Old solution:
// function swapCase(phrase) {
//   return phrase.split('')
//     .map(function(item) {
//       if (item === item.toLowerCase()) {
//         return item.toUpperCase();
//       } else if (item === item.toUpperCase()) {
//         return item.toLowerCase();
//       }
//     })
//     .join('');
// }

module.exports = swapCase;
