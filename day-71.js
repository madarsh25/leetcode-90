// 137. Single Number II

var singleNumber = function (nums) {
    let map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    for(let num of nums){
        if( map.get(num) !== 3){
            return num;
        }
    }

};
