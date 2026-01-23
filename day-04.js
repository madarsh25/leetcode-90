// 504- Base 7

/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  if (num === 0) return "0";

  let sign = num < 0 ? "-" : "";
  num = Math.abs(num);

  let result = "";

  while (num > 0) {
    result = (num % 7) + result;
    num = Math.floor(num / 7);
  }

  return sign + result;
};

// Fibonacci Series

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0,
    b = 1;

  for (let i = 2; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }

  return b;
};
