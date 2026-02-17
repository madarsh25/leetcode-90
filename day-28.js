//977. Squares of a Sorted Array

var sortedSquares = function (nums) {
  arr = nums.map(function (e) {
    return e * e;
  });
  arr.sort((a, b) => a - b);
  return arr;
};
