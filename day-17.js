// 905. Sort Array By Parity

var sortArrayByParity = function (nums) {
  arr = [];
  idx = 0;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      arr[idx++] = nums[i];
    }
  }
  for (i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      arr[idx++] = nums[i];
    }
  }
  return arr;
};
