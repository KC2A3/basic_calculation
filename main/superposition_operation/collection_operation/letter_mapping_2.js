'use strict';

function average_to_letter(collection) {
  let count = 0;
  let newarry = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  for (let i = 0; i < collection.length; i++) {
    count += collection[i];
  }
  let average = Math.ceil(count / (collection.length));
  let result = newarry[average - 1];
  return result;
}
module.exports = average_to_letter;