
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix !== undefined) {
    let count = 0;
    let result = [];
    for (let arr of matrix) {
      if (count % 2 == 0) {
        result = result.concat(arr);
      } else {
        result = result.concat(arr.reverse());
      }
      count++;
    }
    return result;
  } else {
    return [];
  }
}
