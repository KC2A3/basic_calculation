'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  let result = [];
  for (let elementA of collection_a) {
    for (let elementB of collection_b) {
      if (elementA % elementB === 0) {
        result.push(elementA);
      }
    }
  }
  return result;
}
module.exports = choose_divisible_integer;