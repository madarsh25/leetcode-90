// 2000. Reverse Prefix of Word

var reversePrefix = function (word, ch) {
  let idx = word.indexOf(ch);

  if (idx === -1) return word;

  return (
    word
      .slice(0, idx + 1)
      .split("")
      .reverse()
      .join("") + word.slice(idx + 1)
  );
};
