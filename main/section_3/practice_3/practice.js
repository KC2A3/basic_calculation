function create_updated_collection(collection_a, object_b) {
  collection_c = count_same_elements(collection_a);
  create_updated_collection2(collection_c, object_b);
  return collection_c;
}

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

function create_updated_collection2(collection, object_b) {
  let result = [];
  for (let element of object_b.value) {
    for (let key of collection) {
      if (key['key'] === element) {
        if (key['count'] >= 3) {
          key['count'] = key['count'] - parseInt(key['count'] / 3);
        }
      }
    }
  }
  return collection;
}
module.exports = create_updated_collection;