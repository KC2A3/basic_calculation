'use strict';
var calculate_average = function(collection) {
  let num = 0;
  let count = 0;
  for (i = 0; i < collection.length; i++) {
    if (collection.indexOf(collection[i]) % 2 != 0) {
      count = count + collection[i];
      num++;
    }
  }
  return Math.ceil(count / num);
};
module.exports = calculate_average;