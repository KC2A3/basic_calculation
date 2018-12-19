function count_same_elements(collection) {
  return covertObjToArray(coutSameElementsToObj(collection));
}

function coutSameElementsToObj(collection) {
  let count = {};
  collection.map((element) => {
    let key = element.match(/[a-zA-Z]+/g)[0];
    let matchValue = element.match(/[0-9]+/g);
    let countnum = matchValue ? matchValue : 1;
    if (count[key]) {
      count[key] += parseInt(countnum);
    } else {
      count[key] = parseInt(countnum);
    }
  })
  return count;
}

function covertObjToArray(obj) {
  return Object.keys(obj).map((element) => {
    return {
      key: element,
      count: obj[element]
    };
  });
}
module.exports = count_same_elements;