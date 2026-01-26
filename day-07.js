var titleToNumber = function (columnTitle) {
  let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let temp = 0;
  for (let i = 0; i < 26; i++) {
    if (abc.charAt(i) === columnTitle) {
      temp = i + 1;
      break;
    }
  }

  // if()
  console.log(temp);
};
titleToNumber("A");
