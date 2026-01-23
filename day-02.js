//258- Add Digits

var addDigits = function (num) {
  while (num >= 10) {
    num = String(num)
      .split("")
      .reduce((sum, d) => sum + Number(d), 0);
  }
  return num;
};

// 344- Reverse string w/o loops

var reverseString = function (s) {
  s = s.reverse().join("");
};
