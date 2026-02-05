// 26. Remove Duplicates from Sorted Array

var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  k = 1;
  for (i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

//1672. Richest Customer Wealth

var maximumWealth = function (accounts) {
  sum = 0;
  max = 0;
  for (i = 0; i < accounts.length; i++) {
    sum = accounts[i].reduce(function (acc, cur) {
      return acc + cur;
    }, 0);
    if (sum > max) {
      max = sum;
    }
  }
  return max;
};

// 977. Squares of a Sorted Array

var sortedSquares = function (nums) {
  arr = nums.map(function (e) {
    return e * e;
  });
  arr.sort((a, b) => a - b);
  return arr;
};
