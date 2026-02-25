// 367. Valid Perfect Square

var isPerfectSquare = function (num) {
  for (let i = 1; i * i <= num; i++) {
    if (i * i === num) return true;
  }
  return false;
};

// 263. Ugly Number

var isUgly = function (n) {
  if (n <= 0) {
    return false;
  }

  for (let p of [2, 3, 5]) {
    while (n % p === 0) {
      n /= p;
    }
  }
  return n === 1;
};
