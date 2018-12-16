function count_same_elements(collection) {
  let arr = [];
  let result = [];
  for (let i = 0; i < collection.length;) {
    let count = 0;
    for (let j = i; j < collection.length; j++) {
      if (collection[i] === collection[j]) {
        count++;
      }
    }
    arr.push({
      key: collection[i],
      count: count
    })
    i += count;
  }
  for (let k = 0; k < arr.length; k++) {
    result.push(arr[k]);
  }
  return result;
}
module.exports = count_same_elements;