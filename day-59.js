// 506. Relative Ranks

var findRelativeRanks = function (score) {
  let n = score.length;
  let arr = score.map((val, idx) => [val, idx]);

  // sort descending by score
  arr.sort((a, b) => b[0] - a[0]);

  let res = new Array(n);

  for (let i = 0; i < n; i++) {
    let index = arr[i][1];

    if (i === 0) res[index] = "Gold Medal";
    else if (i === 1) res[index] = "Silver Medal";
    else if (i === 2) res[index] = "Bronze Medal";
    else res[index] = (i + 1).toString();
  }

  return res;
};
