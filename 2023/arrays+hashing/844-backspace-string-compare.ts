// https://leetcode.com/problems/backspace-string-compare/description/

function backspaceCompare(s: string, t: string): boolean {
  let s1: string[] = [];
  let t1: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "#") {
      s1.push(s[i]);
    } else {
      s1.pop();
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (t[i] !== "#") {
      t1.push(t[i]);
    } else {
      t1.pop();
    }
  }

  return s1.join("") === t1.join("");
}
