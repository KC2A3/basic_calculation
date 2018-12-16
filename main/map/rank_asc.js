'use strict';
var rank_asc = function(collection) {
  let max = [];
  for (let i = 0; i < collection.length; i++) {
    for (let j = i; j < collection.length; j++) {
      if (collection[i] < collection[j]) {
        max = collection[j];
        collection[j] = collection[i];
        collection[i] = max;
      }
    }
  }
  return collection;
};
module.exports = rank_asc;