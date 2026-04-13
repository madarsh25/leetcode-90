// 1848. Minimum Distance to the Target Element

var getMinDistance = function (nums, target, start) {
    let minDist = Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            minDist = Math.min(minDist, Math.abs(i - start))
        }
    }
    return minDist;
};
