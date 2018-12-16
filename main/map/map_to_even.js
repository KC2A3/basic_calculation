'use strict';

function map_to_even(collection) {
  let result = [];
  for (let element of collection) {
    result.push(element * 2);
  }
  return result;
}
module.exports = map_to_even;