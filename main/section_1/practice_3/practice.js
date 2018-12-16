function collect_same_elements(collection_a, object_b) {
  let result = [];
  for (let number of collection_a) {
    if (object_b.value.indexOf(number) >= 0) {
      result.push(number)
    }
  }
  return result;
}
module.exports = collect_same_elements;