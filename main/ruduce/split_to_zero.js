'use strict';

function spilt_to_zero(number, interval) {
  let result = [];
  let num = number * 10;
  let int = interval * 10;
  deleteNum(result, num, int)

  function deleteNum(result, num, int) {
    if (num <= 0) {
      return result.push(Math.round(num) / 10);
    } else {
      result.push(Math.round(num) / 10);
      num -= int;
      return deleteNum(result, num, int);
    }
  }
  return result;
}
module.exports = spilt_to_zero;