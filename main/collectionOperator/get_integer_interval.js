'use strict';

function get_integer_interval(number_a, number_b) {
  let x = number_a;
  let y = number_b;
  let array = [];
  if (x < y) {
    for (let i = x; i <= y; i++) {
      array.push(i);
    }
  } else if (x > y) {
    for (let i = x; i >= y; --i) {
      array.push(i);
    }
  } else if (x === y) {
    array.push(x);
  }
  return array;
}
module.exports = get_integer_interval;