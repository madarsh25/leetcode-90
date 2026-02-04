//1929- Concatenation

var getConcatenation = function (nums) {
  arr = [];
  for (i = 0; i < nums.length; i++) {
    arr.push(nums[i]);
  }
  for (i = 0; i < nums.length; i++) {
    arr.push(nums[i]);
  }
  return arr;
};

//1480- Running Sum of 1d Array

var runningSum = function (nums) {
  sum = 0;
  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
    nums[i] = sum;
  }
  return nums;
};
