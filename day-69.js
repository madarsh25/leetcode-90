// 523. Continuous Subarray Sum

var checkSubarraySum = function(nums, k) {
    let map = new Map();
    map.set(0, -1); // important for subarrays starting at index 0
    
    let sum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        
        if (k !== 0) {
            sum %= k;
        }
        
        if (map.has(sum)) {
            if (i - map.get(sum) > 1) {
                return true;
            }
        } else {
            map.set(sum, i);
        }
    }
    
    return false;
};
