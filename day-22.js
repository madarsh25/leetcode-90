// 167. Two Sum II - Input Array Is Sorted

var twoSum = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];

    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
};

// 485. Max Consecutive Ones

var findMaxConsecutiveOnes = function (nums) {
  count = 0;
  max = 0;
  nums.forEach(function (e) {
    if (e === 1) {
      count++;
      if (count > max) {
        max = count;
      }
    } else {
      count = 0;
    }
  });
  return max;
};
