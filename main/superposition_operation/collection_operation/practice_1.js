'use strict';

function hybrid_operation(collection) {
  let count = 0;
  for (let i = 0; i < collection.length; i++) {
    collection[i] = collection[i] * 3 + 2;
  }
  for (let j = 0; j < collection.length; j++) {
    count = count + collection[j];
  }
  return count;
}
module.exports = hybrid_operation;