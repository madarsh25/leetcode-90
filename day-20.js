// 34. Find First and Last Position of Element in Sorted Array

var searchRange = function (nums, target) {
  first = -1;
  last = -1;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (first == -1) {
        first = i;
      }
      last = i;
    }
  }
  return [first, last];
};
