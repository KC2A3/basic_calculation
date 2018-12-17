'use strict';

function hybrid_operation_to_uneven(collection) {
  let count = 0;
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] % 2 != 0) {
      collection[i] = collection[i] * 3 + 5;
      count = count + collection[i];
    }
  }
  return count;
}
module.exports = hybrid_operation_to_uneven;