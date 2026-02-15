// 229. Majority Element II

var majorityElement = function (nums) {
  let freq = {};
  let n = nums.length;
  for (let n of nums) {
    freq[n] = (freq[n] || 0) + 1;
  }
  let el = [];
  for (let [key, val] of Object.entries(freq)) {
    if (val > n / 3) {
      el.push(Number(key));
    }
  }
  return el;
};
