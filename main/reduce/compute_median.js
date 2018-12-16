'use strict';

function compute_median(collection) {
  let mid;
  collection.sort(compare);
  if (collection.length % 2 == 0) {
    mid = (collection[collection.length / 2] + collection[collection.length / 2 + 1]) / 2 - 1
  }
  if (collection.length % 2 != 0) {
    mid = collection[(collection.length + 1) / 2] - 1
  }
  return mid;
}
var compare = function(x, y) {
  if (x < y) {
    return -1;
  } else if (x > y) {
    return 1;
  } else {
    return 0;
  }
};
module.exports = compute_median;