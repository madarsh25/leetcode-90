// 219. Contains Duplicate II

var containsNearbyDuplicate = function (nums, k) {
  const n = nums.length;

  for (let i = 0; i < n - 1; i++) {
    const curr = nums[i];

    // If k is 0, duplicates are impossible
    if (k === 0) return false;

    // Limit j strictly to i + k
    for (let j = i + 1, limit = Math.min(n, i + k + 1); j < limit; j++) {
      if (curr === nums[j]) {
        return true;
      }
    }
  }
  return false;
};
