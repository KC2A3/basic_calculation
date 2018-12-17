'use strict';
var is_exist_element = function(collection, element) {
  let result;
  if (collection.indexOf(element) % 2 === 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
};
module.exports = is_exist_element;