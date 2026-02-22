// 1189. Maximum Number of Balloons

var maxNumberOfBalloons = function (text) {
  map = {};
  for (let n of text) {
    map[n] = (map[n] || 0) + 1;
  }
  return Math.min(
    map["b"] || 0,
    map["a"] || 0,
    map["n"] || 0,
    Math.floor((map["l"] || 0) / 2),
    Math.floor((map["o"] || 0) / 2),
  );
};

// 217. Contains Duplicate

var containsDuplicate = function (nums) {
  map = {};
  for (let n of nums) {
    map[n] = (map[n] || 0) + 1;
    if (map[n] > 1) {
      return true;
    }
  }
  return false;
};
