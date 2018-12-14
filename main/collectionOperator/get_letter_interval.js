'use strict';

function get_letter_interval(number_a, number_b) {
  var alphabet = ['a', 'b', 'c', 'd', 'e']
  let x = number_a;
  let y = number_b;
  let array = [];
  if (x < y) {
    for (let i = x - 1; i < y; i++) {
      array.push(alphabet[i]);
    }
  } else if (x > y) {
    for (let i = x; i >= y, i--;) {
      array.push(alphabet[i]);
    }
  } else if (x === y) {
    array.push(alphabet[x-1]);
  }
  return array;
}
module.exports = get_letter_interval;