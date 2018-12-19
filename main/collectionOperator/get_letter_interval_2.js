'use strict';
var number_map_to_word_over_26 = require('../map/number_map_to_word_over_26.js');
var get_integer_interval = require('./get_integer_interval.js')

function get_letter_interval_2(number_a, number_b) {
  let newarry = get_integer_interval(number_a, number_b);
  return number_map_to_word_over_26(newarry);
}
module.exports = get_letter_interval_2;