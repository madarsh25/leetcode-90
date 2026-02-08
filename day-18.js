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

// 1732. Find the Highest Altitude

var largestAltitude = function (gain) {
  sum = 0;
  arr = [0];
  for (i = 1; i <= gain.length; i++) {
    sum += gain[i - 1];
    arr[i] = sum;
  }
  maxAlt = Math.max(...arr);
  return maxAlt;
};
