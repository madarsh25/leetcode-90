//682. Baseball Game

var calPoints = function (operations) {
  let st = [];
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "D") {
      st.push(st[st.length - 1] * 2);
    } else if (operations[i] === "C") {
      st.pop();
    } else if (operations[i] === "+") {
      st.push(st[st.length - 1] + st[st.length - 2]);
    } else {
      st.push(Number(operations[i]));
    }
  }
  let count = 0;
  for (i = 0; i < st.length; i++) {
    count += st[i];
  }
  return count;
};
