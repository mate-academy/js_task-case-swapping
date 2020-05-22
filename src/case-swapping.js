'use strict';

function swapCase(phrase) {
  let swapWord = '';

  for (const letter of phrase) {
    swapWord += letter === letter.toUpperCase()
      ? letter.toLowerCase()
      : letter.toUpperCase();
  }

  return swapWord;
}

module.exports = swapCase;
