// 414. Third Maximum

var thirdMax = function (nums) {
  let set = new Set(nums);
  let arr = [...set].sort((a, b) => b - a);

  if (arr.length >= 3) {
    return arr[2];
  } else {
    return arr[0];
  }
};
