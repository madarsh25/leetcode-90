// 415. Add Strings

var addStrings = function (num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry) {
    let n1 = i >= 0 ? num1[i] - "0" : 0;
    let n2 = j >= 0 ? num2[j] - "0" : 0;

    let sum = n1 + n2 + carry;
    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);

    i--;
    j--;
  }

  return result;
};
