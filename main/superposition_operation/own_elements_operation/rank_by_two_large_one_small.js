'use strict';

function rank_by_two_large_one_small(collection) {
  //sort
  let afterRank = rankAsc(collection);
  let result = [];
  for (let i = 0; i <= Math.floor(afterRank.length / 3); i++) {
    let begin = i * 3;
    let end = begin + 3;
    let sliceArr = end <= afterRank.length ? afterRank.slice(begin, end) : afterRank.slice(begin);
    result = sliceArr.length === 3 ? result.concat(twoLargeBeforeOneSmall(sliceArr)) : result.concat(sliceArr);
  }
  return result;
}

function twoLargeBeforeOneSmall(collection) {
  collection.push(collection.shift());
  return collection;
}

function rankAsc(collection) {
  for (let i = collection.length; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (collection[j] > collection[j + 1]) {
        let min = collection[j];
        collection[j] = collection[j + 1];
        collection[j + 1] = min;
      }
    }
  }
  return collection;
}
module.exports = rank_by_two_large_one_small;