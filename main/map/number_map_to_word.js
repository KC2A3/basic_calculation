'use strict';
var number_map_to_word = function(collection) {
  let result = [];
  let letter = ['a', 'b', 'c', 'd', 'e']
  for (let element of collection) {
    result.push(letter[element - 1]);
  }
  return result;
};
module.exports = number_map_to_word;