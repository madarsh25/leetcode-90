//164. Maximum Gap

var maximumGap = function(nums) {
    if (nums.length < 2) return 0;

    let min = Math.min(...nums);
    let max = Math.max(...nums);
    let n = nums.length;

    let gap = Math.ceil((max - min) / (n - 1));

    let bucketMin = new Array(n - 1).fill(Infinity);
    let bucketMax = new Array(n - 1).fill(-Infinity);

    // Place numbers into buckets
    for (let num of nums) {
        if (num === min || num === max) continue;

        let idx = Math.floor((num - min) / gap);
        bucketMin[idx] = Math.min(bucketMin[idx], num);
        bucketMax[idx] = Math.max(bucketMax[idx], num);
    }

    // Calculate max gap
    let maxGap = 0;
    let prev = min;

    for (let i = 0; i < n - 1; i++) {
        if (bucketMin[i] === Infinity) continue;

        maxGap = Math.max(maxGap, bucketMin[i] - prev);
        prev = bucketMax[i];
    }

    // Final gap with max
    maxGap = Math.max(maxGap, max - prev);

    return maxGap;
};
