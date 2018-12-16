'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  let result = [];
  for (let element of collection_a) {
    if (collection_b.indexOf(element) < 0) {
      result.push(element);
    }
  }
  return result;
}
module.exports = choose_no_common_elements;