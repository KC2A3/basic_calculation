'use strict';
var number_map_to_word_over_26 = require('../../map/number_map_to_word_over_26.js');
var compute_median = require('../../reduce/compute_median.js');

function median_to_letter(collection) {
  let collection_a = compute_median(collection);
  let result = number_map_to_word_over_26([Math.ceil(collection_a)]);
  return result[0];
}
module.exports = median_to_letter;