'use strict';

function rank_by_two_large_one_small(collection) {
  let result = [];
  let newarry = collection.sort(smallToBig);
  let num = parseInt(newarry / newarry.length);
  for (i = 0; i < num; i++) {
    let smallest = collection.splice(i * 3, 1);
    collection.splice(i * 3 + 2, 0, smallest[0]);
  }
  return collection;
  }

  function smallToBig(a, b) {
    if (a > b) {
      return 1;
    }
  }
  module.exports = rank_by_two_large_one_small;