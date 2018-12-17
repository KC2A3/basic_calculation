function create_updated_collection(collection_a, object_b) {
  let result = [];
  for (let element of object_b.value) {
    for (let key of collection_a) {
      if (key['key'] === element) {
        key['count'] -= 1
      }
    }
  }
  return collection_a;
}
module.exports = create_updated_collection;