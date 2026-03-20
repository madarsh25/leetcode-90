// 442. Find All Duplicates in an Array

var findDuplicates = function (nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;

    if (nums[index] < 0) {
      result.push(Math.abs(nums[i]));
    } else {
      nums[index] *= -1;
    }
  }

  return result;
};

// 389. Find the Difference

var findTheDifference = function (s, t) {
  let xor = 0;

  for (let ch of s) {
    xor ^= ch.charCodeAt(0);
  }

  for (let ch of t) {
    xor ^= ch.charCodeAt(0);
  }

  return String.fromCharCode(xor);
};

// 2089. Find Target Indices After Sorting Array

var targetIndices = function (nums, target) {
  let less = 0;
  let count = 0;

  for (let num of nums) {
    if (num < target) less++;
    else if (num === target) count++;
  }

  let result = [];
  for (let i = 0; i < count; i++) {
    result.push(less + i);
  }

  return result;
};
