'use strict';

function collect_max_number(collection) {
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
  return collection[0];
};
module.exports = collect_max_number;