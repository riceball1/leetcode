// https://leetcode.com/problems/can-convert-string-in-k-moves/

function canConvertString(s: string, t: string, k: number): boolean {

    // if the lengths do not match, then we cannot convert, return false
    if (s.length !== t.length) return false;


// use an array to handle determining how many shifts
  const shifts = Array(26).fill(0);

  // iterate the length of the strings
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[i]) {
      continue;
    }

    // find the difference between the chars using modulo to get the number of shifts
    // the resulting value can be used to represent the number of positions between the two characters in the alphabet
    let diff = (t.charCodeAt(i) - s.charCodeAt(i) + 26) % 26;

    // determine if the shift difference is greater than k, then it is false
    /*
    The 'shifts' variable is an array that contains the number of shifts required for each character in the input string. The 'diff' variable is the value obtained from the previous line of code, which represents the difference between two characters at the same position in two different strings.
    */
    if (shifts[diff] * 26 + diff > k) return false;

    // otherwise calculate the shifts at the difference position
    shifts[diff] += 1

  }

  return true;

};

/*
Example test cases

Input: s = "input", t = "ouput", k = 9
Output: true
Explanation: In the 6th move, we shift 'i' 6 times to get 'o'. And in the 7th move we shift 'n' to get 'u'.

Input: s = "aab", t = "bbb", k = 27
Output: true
Explanation: In the 1st move, we shift the first 'a' 1 time to get 'b'. In the 27th move, we shift the second 'a' 27 times to get 'b'.

*/