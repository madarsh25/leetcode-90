// 747. Largest Number At Least Twice of Others

var dominantIndex = function (nums) {
    let max1 = -1;
    max2 = -1;
    index = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max1) {
            max2 = max1;
            max1 = nums[i];
            index = i;
        } else if (nums[i] > max2) {
            max2 = nums[i];
        }
    }
    return (max1 >= 2 * max2) ? index : -1;
};
