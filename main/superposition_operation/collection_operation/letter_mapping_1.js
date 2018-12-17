'use strict';

function even_to_letter(collection) {
  let result = [];
  let newarry = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] % 2 === 0) {
      result.push(newarry[collection[i]-1]);
    }
  }
  return result;
}
module.exports = even_to_letter;