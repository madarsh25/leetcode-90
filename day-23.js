// 643. Maximum Average Subarray I

var findMaxAverage = function (nums, k) {
  sum = 0;
  for (i = 0; i < k; i++) {
    sum += nums[i];
  }
  maxSum = sum;

  for (i = k; i < nums.length; i++) {
    sum = sum + nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum / k;
};
