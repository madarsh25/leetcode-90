// 268- Missing number problem

var missingNumber = function (nums) {
  let n = nums.length;

  for (let i = 0; i <= n; i++) {
    let count = true;
    for (let j = 0; j < n; j++) {
      if (nums[j] === i) {
        count = true;
        break;
      } else {
        count = false;
        continue;
      }
    }
    if (count === false) {
      return i;
      break;
    }
  }
};
