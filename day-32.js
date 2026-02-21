// 771. Jewels and Stones

var numJewelsInStones = function (jewels, stones) {
  count = 0;
  set = new Set(jewels);

  for (let stone of stones) {
    if (set.has(stone)) {
      count++;
    }
  }
  return count;
};

// 383. Ransom Note

var canConstruct = function (ransomNote, magazine) {
  let set = {};
  for (let ch of magazine) {
    set[ch] = (set[ch] || 0) + 1;
  }

  for (let letter of ransomNote) {
    if (!set[letter]) {
      return false;
    }
    set[letter]--;
  }
  return true;
};
