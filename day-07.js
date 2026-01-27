//231- Power of two

var isPowerOfTwo = function(n) {
    let a
    for(let i=0; i<=31; i++){
        if(2**i === n){
            a= true
            break
        }
    }
    if( a== true){
        return true
    }else{
        return false
    }
    
};