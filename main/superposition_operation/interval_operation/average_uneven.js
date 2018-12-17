'use strict';

function average_uneven(collection) {
  let count = 0;
  let num = 0;
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] % 2 != 0) {
      count = count + collection[i];
      num++;
    }
  }
  return Math.round(count / num);
}
module.exports = average_uneven;