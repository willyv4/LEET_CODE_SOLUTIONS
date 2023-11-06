const threeSum = (arr, target) => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = i;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const neededVal = target - (arr[i] + arr[j]);
      if (obj[neededVal] && obj[neededVal] !== i && obj[neededVal] !== j) {
        return [i, j, obj[neededVal]];
      }
    }
  }

  return [];
};

console.log(threeSum([1, 2, 3, 4], 8));
console.log(threeSum([1, 2, 3, 4], 9)); // 0,3,3

// "abc##dg#hh#" => "adh"
/**
 Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

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
// stack

// move duplicates of the arr and return arr
