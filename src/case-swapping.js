'use strict';

function swapCase(phrase) {
  // write code here
  let swapPhrase = '';

  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] === phrase[i].toLowerCase()) {
      swapPhrase += phrase[i].toUpperCase();
    } else {
      swapPhrase += phrase[i].toLowerCase();
    }
  }

  return swapPhrase;
}

module.exports = swapCase;
