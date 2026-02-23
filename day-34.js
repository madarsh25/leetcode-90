// 125. Valid Palindrome

var isPalindrome = function (s) {
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNum(s[left])) left++;
    while (left < right && !isAlphaNum(s[right])) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }
  return true;
};

function isAlphaNum(ch) {
  return /[a-zA-Z0-9]/.test(ch);
}
