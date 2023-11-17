/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

 */

const isValid = (string) => {
  obj = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  const stack = [];

  for (let char of string) {
    if (obj[char]) {
      stack.push(char);
    } else {
      const recentBracket = stack.pop();
      if (obj[recentBracket] !== char) return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid());

var isValid2 = function (s) {
  const bracketPairs = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);

  const openingBrackets = new Set(["(", "[", "{"]);
  const stack = [];

  for (let char of s) {
    if (openingBrackets.has(char)) {
      stack.push(char);
    } else {
      const lastOpenBracket = stack.pop();
      if (bracketPairs.get(lastOpenBracket) !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
