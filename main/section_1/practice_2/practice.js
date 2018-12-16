function collect_same_elements(collection_a, collection_b) {
  let oneDimensional = [].concat.apply([], collection_b)
  let result = [];
  for (let number of collection_a) {
    if (oneDimensional.indexOf(number) >= 0) {
      result.push(number)
    }
  }
  return result;
}
module.exports = collect_same_elements;