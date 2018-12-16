function collect_same_elements(collection_a, object_b) {
  let result = [];
  let collectionAKey = [];
  for (i = 0; i < collection_a.length; i++) {
    let arr = collection_a[i];
    for (var key in arr) {
      collectionAKey.push(arr[key]);
    }
  }
  for (let element of collectionAKey) {
    if (object_b.value.indexOf(element) >= 0) {
      result.push(element)
    }
  }
  return result;
}
module.exports = collect_same_elements;