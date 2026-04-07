// 287. Find the Duplicate Number

var findDuplicate = function(nums) {
    let left = 1, right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        let count = 0;
        for (let num of nums) {
            if (num <= mid) count++;
        }

        if (count > mid) {
            right = mid;   // duplicate is in left half
        } else {
            left = mid + 1; // duplicate is in right half
        }
    }

    return left;
};
