// 290. Word Pattern

var wordPattern = function (pattern, s) {
  const words = s.split(" ");
  if (pattern.length !== words.length) return false;

  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < pattern.length; i++) {
    let p = pattern[i];
    let w = words[i];

    if (map1.has(p) && map1.get(p) !== w) return false;
    if (map2.has(w) && map2.get(w) !== p) return false;

    map1.set(p, w);
    map2.set(w, p);
  }

  return true;
};
