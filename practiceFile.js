// var isValid = function (s) {
//   const stack = [];

//   for (let char of s) {
//     if (brackets[char]) {
//       stack.push(char);
//     } else {
//       if (brackets[stack.pop()] !== char) return false;
//     }
//   }

//   return stack.length === 0;
// };

const generateParenthesis = (n) => {
  const stack = [];
  const go = (l, r, s) => {
    // if 2 x n === length of s push s to stack
    if (s.length === 2 * n) stack.push(s);
    // if left less than n call go with increaing left and concat
    if (l < n) go(l + 1, r, s + "(");
    // if right less than n call go with increaing right and concat
    if (r < l) go(l, r + 1, s + ")");
  };
  // call go
  go(0, 0, "");
  return stack;
};

console.log(generateParenthesis(3));
