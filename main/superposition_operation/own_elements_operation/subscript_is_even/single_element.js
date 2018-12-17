'use strict';
var single_element = function(collection) {
  let arry = [];
  let result = [];
  for (i = 0; i < collection.length; i++) {
    if (collection.indexOf(collection[i]) % 2 != 0) {
      arry.push(collection[i]);
    }
  }
  for (let element of arry) {
    if (arry.indexOf(element) === arry.lastIndexOf(element)) {
      result.push(element);
    }
  }
  return result;
};
module.exports = single_element;