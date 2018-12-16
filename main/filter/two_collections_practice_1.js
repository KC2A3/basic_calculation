'use strict';

function choose_common_elements(collection_a, collection_b) {
  let result = [];
  for (let number of collection_a) {
    if (collection_b.indexOf(number) >= 0) {
      result.push(number)
    }
  }
  return result;
}
module.exports = choose_common_elements;