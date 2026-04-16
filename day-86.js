// 290. Word Pattern

var wordPattern = function(pattern, s) {
    const words = s.split(" ");
    if (pattern.length !== words.length) return false;

    const map = new Map();
    const used = new Set();

    for (let i = 0; i < pattern.length; i++) {
        const p = pattern[i];
        const w = words[i];

        if (map.has(p)) {
            if (map.get(p) !== w) return false;
        } else {
            if (used.has(w)) return false;
            map.set(p, w);
            used.add(w);
        }
    }

    return true;
};
