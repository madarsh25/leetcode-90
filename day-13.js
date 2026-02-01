// 274- H-Index

var hIndex = function (citations) {
  citations.sort((a, b) => a - b);

  let n = citations.length;

  for (let i = 0; i < n; i++) {
    if (citations[i] >= n - i) {
      return n - i;
    }
  }

  return 0;
};

//217- Contains Duplicate

var containsDuplicate = function (nums) {
  let duplicate = false;
  nums.sort((a, b) => a - b);
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      duplicate = true;
    }
  }
  return duplicate;
};
