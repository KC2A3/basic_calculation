'use strict';
var even_group_calculate_average = function(collection) {
  let arry = [];
  let even = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection.indexOf(collection[i]) % 2 != 0) {
      arry.push(collection[i]);
    }
  }
  for (let j = 0; j < arry.length; j++) {
    if (arry[j] % 2 === 0) {
      even.push(arry[j]);
    }
  }
  if (!even) {
    return [0];
  } else {
    grouping(even);
    let count = 0;
    let num = 0;
    let result = [];
    let one = [];
    let two = [];
    let three = [];
    let count_one;
    let count_two;
    let count_three;
    if (!one && !two && three) {
      for (let k = 0; k < even.length; k++) {
        count = count + even[k];
        num++;
      }
      return Math.floor(count / num);
    } else {
      for (let i = 0; i < one.length; i++) {
        count_one = count_one + one[i];
        num++;
      }
      result.push(Math.floor(count_one / num));
      for (let i = 0; i < two.length; i++) {
        count_two = count_two + two[i];
        num++;
      }
      result.push(Math.floor(count_two / num))
      for (let i = 0; i < one.length; i++) {
        count_three = count_three + three[i];
        num++;
      }
      result.push(Math.floor(count_three / num))
      return result;
    }
  }
};

function grouping(arr) {
  let one = [];
  let two = [];
  let three = [];
  for (let i = 0; i < arr.length; i++) {
    if (10 > arr[i] / 10 >= 1) {
      two.push(arr[i])
    } else if (arr[i] / 100 >= 1) {
      three.push(arr[i])
    } else {
      one.push(arr[i])
    }
  }
  return one;
  return two;
  return three;
}
module.exports = even_group_calculate_average;