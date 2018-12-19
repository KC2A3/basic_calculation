var count_same_elements = require('../../section_2/practice_2/practice.js');
var create_updated_collection = require('../practice_2/practice.js')

function create_updated_collection(collection_a, object_b) {
  collection_c = count_same_elements(collection_a);
  create_updated_collection(collection_c, object_b);
  return collection_c;
}
module.exports = create_updated_collection;