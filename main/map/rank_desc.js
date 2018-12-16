'use strict';
var rank_desc = function(collection){
  let min = [];
  for (let i = 0; i < collection.length; i++) {
    for (let j = i; j < collection.length; j++) {
      if (collection[i] > collection[j]) {
        min = collection[j];
        collection[j] = collection[i];
        collection[i] = min;
      }
    }
  }
  return collection;
};

module.exports = rank_desc;
