'use strict';

function get_integer_interval_2(number_a, number_b) {
  var x = number_a;
  var y = number_b;
  var array = [];
  if (x < y) {
    for (var i = x; i <= y; i++) {
      if (i % 2 == 0) {
        array.push(i);
      }
    }
  } else if (x > y) {
    for (var i = x + 1; i > y, --i;) {
      if (i % 2 == 0) {
        array.push(i);
      }
    }
  } else if (x === y) {
    if (x % 2 == 0) {
      array.push(x);
    }
  }
  return array
}
module.exports = get_integer_interval_2;