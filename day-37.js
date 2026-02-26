// 07. Reverse Integer

var reverse = function (x) {
  let sign = x < 0 ? -1 : 1;
  let rev = 0;
  x = Math.abs(x);

  while (x > 0) {
    let digit = x % 10;
    rev = rev * 10 + digit;
    x = Math.floor(x / 10);
  }

  rev *= sign;

  if (rev < -(2 ** 31) || rev > 2 ** 31 - 1) {
    return 0;
  }

  return rev;
};
