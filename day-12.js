// 164- Maximum Gap

var maximumGap = function (nums) {
  if (nums.length < 2) {
    return 0;
  }

  nums.sort((a, b) => a - b);

  let max = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] - nums[i] > max) {
      max = nums[i + 1] - nums[i];
    }
  }

  return max;
};

// Another way but time limit exceeded due to bubble sort

let max = 0;
if (nums.length < 2) {
  return 0;
} else {
  for (i = 0; i < nums.length; i++) {
    for (j = 0; j < nums.length; j++) {
      if (nums[j] > nums[j + 1]) {
        temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }

  for (i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] > max) {
      max = nums[i + 1] - nums[i];
    }
  }
}
console.log(max);
