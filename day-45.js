// 20. Valid Parenthesis

var isValid = function (s) {
  let st = [];
  for (i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
      st.push(s[i]);
    } else {
      if (st.length === 0) {
        return false;
      }

      let ch = st[st.length - 1];

      if (
        (s[i] == ")" && ch == "(") ||
        (s[i] == "}" && ch == "{") ||
        (s[i] == "]" && ch == "[")
      ) {
        st.pop();
      } else {
        return false;
      }
    }
  }
  return st.length === 0;
};
