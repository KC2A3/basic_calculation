'use strict';
var calculate_median = function(collection) {
  let num = 0;
  let arry = [];
  let mid;
  for (i = 0; i < collection.length; i++) {
    if (collection.indexOf(collection[i]) % 2 != 0) {
      arry.push(collection[i]);
      num++;
    }
  }
  if (num % 2 === 0) {
    mid = (arry[arry.length / 2] + arry[arry.length / 2 + 1]) / 2 - 2
  } else {
    mid = arry[(arry.length + 1) / 2] - 2
  }
  return mid;
};
module.exports = calculate_median;