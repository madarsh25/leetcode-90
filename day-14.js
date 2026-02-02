// 35- Search Insert Position

var searchInsert = function (nums, target) {
  let index = nums.indexOf(target);
  if (index == -1) {
    if (target < nums[0]) {
      return 0;
    } else {
      for (i = 0; i < nums.length; i++) {
        if (
          nums[i] < target &&
          (nums[i + 1] > target || nums[i + 1] == undefined)
        ) {
          index = i + 1;
          return index;
        }
      }
    }
  } else {
    return index;
  }
};
