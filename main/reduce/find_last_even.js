'use strict';

function find_last_even(collection) {
  let i = collection.length;
  while (collection[i] % 2 != 0) {
    i--;
  }
  return collection[i];
}
module.exports = find_last_even;