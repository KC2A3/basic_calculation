'use strict';
var even_asc_odd_desc = function(collection) {
  let odd_number = collection.filter(x => x % 2);
  let even_number = collection.filter(x => !(x % 2));
  odd_number.sort(bigToSmall);
  even_number.sort(smallToBig);
  return even_number.concat(odd_number);
}

function bigToSmall(a, b) {
  if (a < b) {
    return 1;
  }
}

function smallToBig(a, b) {
  if (a > b) {
    return 1;
  }
}
module.exports = even_asc_odd_desc;