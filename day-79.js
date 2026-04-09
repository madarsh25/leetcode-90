// 263. Ugly Number

var isUgly = function(n) {
    if (n <= 0) return false;

    let factors = [2, 3, 5];

    for (let f of factors) {
        while (n % f === 0) {
            n = n / f;
        }
    }

    return n === 1;
};
