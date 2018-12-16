'use strict';
var map_to_three_multiples = function(collections) {
  let result = [];
  for (let element of collections) {
    result.push(element * 3);
  }
  return result;
};
module.exports = map_to_three_multiples;