// 365. Water Jug Problem

var canMeasureWater = function(x, y, z) {
    if (z > x + y) return false;
    if (z === 0) return true;

    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

    return z % gcd(x, y) === 0;
};
