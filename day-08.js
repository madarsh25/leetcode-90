//326- Power of three

var isPowerOfThree = function(n) {
    let condition = false
    for(let i=0; i< (2**10); i++){
        if((3**i) === n){
            condition = true
        }
    }
    return condition
};