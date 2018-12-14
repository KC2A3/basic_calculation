'use strict';

function get_intersection(collection_a, collection_b) {
  var result = [];
  for (var i = 0; i < collection_b.length; i++) {
    var element = collection_b[i];
    for (var j = 0; j < collection_a.length; j++) {
      if (element === collection_a[j]) {
        result.push(element);
      }
    }
  }
  return result;
}
module.exports = get_intersection;