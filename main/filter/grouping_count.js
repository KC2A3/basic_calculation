'use strict';

function grouping_count(collection) {
  let numberOfElement = {};
  for (let element of collection) {
    if (numberOfElement[element]) {
      numberOfElement[element] += 1;
    } else {
      numberOfElement[element] = 1;
    }
  }
  return numberOfElement;
}
module.exports = grouping_count;