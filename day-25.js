// 242. Valid Anagram

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let freq1 = {};
  for (let n of s) {
    freq1[n] = (freq1[n] || 0) + 1;
  }
  let freq2 = {};
  for (let n of t) {
    freq2[n] = (freq2[n] || 0) + 1;
  }
  for (let key in freq1) {
    if (freq1[key] !== freq2[key]) {
      return false;
    }
  }
  return true;
};

// 387. First Unique Character in a String

var firstUniqChar = function (s) {
  let freq = {};
  for (let ch of s) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  for (let key in freq) {
    if (freq[key] === 1) {
      return s.indexOf(key);
    }
  }
  return -1;
};
