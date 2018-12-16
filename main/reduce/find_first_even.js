'use strict';

function find_first_even(collection) {
  let i = 0;
  while (collection[i] % 2 != 0) {
    i++;
  }
  return collection[i];
}
module.exports = find_first_even;