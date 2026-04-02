// 260. Single Number III

var singleNumber = function (nums) {
    let map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    let arr = [];
    for( let num of nums){
        if( map.get(num) !== 2){
            arr.push(num);
        }
    }
    return arr;
};
