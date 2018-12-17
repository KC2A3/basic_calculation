'use strict';

function one_add_next_multiply_three(collection) {
  let result = [];
  for (let i = 0; i < collection.length - 1; i++) {
    collection[i] = (collection[i] + collection[i + 1]) * 3;
    result.push(collection[i]);
  }
  return result;
}
module.exports = one_add_next_multiply_three;