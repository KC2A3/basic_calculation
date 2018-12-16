'use strict';

function double_to_one(collection) {
  let result = [];
  let oneDimensionalArray = [].concat.apply([], collection);
  return result = choose_no_repeat_number(oneDimensionalArray);
}

function choose_no_repeat_number(collection) {
  var result = [];
  for (var i = 0; i < collection.length; i++) {
    var flag = true;
    var temp = collection[i];
    for (var j = 0; j < result.length; j++) {
      if (temp === result[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      result.push(temp);
    }
  }
  return result;
}
module.exports = double_to_one;