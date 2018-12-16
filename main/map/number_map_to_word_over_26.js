'use strict';
var number_map_to_word_over_26 = function(collection) {
  let letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  function conversionLetter(num) {
    if (num < 27) {
      return letter[num - 1];
    } else {
      let tenDigits = letter[parseInt(num / 26-1)];
      let digits = letter[(num - 1) % 26];
      return tenDigits + digits;
    }
  }
  let result = [];
  for (let element of collection) {
    result.push(conversionLetter(element));
  }
  return result;
};
module.exports = number_map_to_word_over_26;