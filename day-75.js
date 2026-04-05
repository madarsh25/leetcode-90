// 198. House Robber

var rob = function(nums) {
    let prev1 = 0; // dp[i-1]
    let prev2 = 0; // dp[i-2]

    for (let num of nums) {
        let temp = Math.max(prev1, prev2 + num);
        prev2 = prev1;
        prev1 = temp;
    }

    return prev1;
};
