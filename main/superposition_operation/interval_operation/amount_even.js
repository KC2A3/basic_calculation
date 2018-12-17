'use strict';

function amount_even(collection) {
  let count = 0;
  let num = 0;
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] % 2 === 0) {
      count = count + collection[i];
    }
  }
  return count;
}
module.exports = amount_even;