/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 */

// const longestCommonPrefix = function (strs) {
// 	if (strs.length === 0) return "";

// 	let ans = strs[0];
// 	for (let i = 1; i < strs.length; i++) {
// 		while (strs[i].indexOf(ans) !== 0) {
// 			ans = ans.substring(0, ans.length - 1);
// 			if (ans === "") return "";
// 		}
// 	}
// 	return ans;
// };
// const longestCommonPrefix = function (strs) {
// 	if (strs.length === 0) {
// 		return "";
// 	}
// 	let ans = strs[0];
// 	for (let i = 1; i < strs.length; i++) {
// 		while (strs[i].indexOf(ans) !== 0) {
// 			ans = ans.substring(0, ans.length - 1);
// 			if (ans === "") {
// 				return "";
// 			}
// 		}
// 	}
// 	return ans;
// };

const longestCommonPrefix = (arr) => {
  if (arr.length === 0) return "";

  for (let j = 0; j < arr[0].length; j++) {
    for (let i = 1; i < arr.length; i++) {
      if (j >= arr[i].length || arr[0][j] !== arr[i][j]) {
        return arr[0].substring(0, j);
      }
    }
  }
  return arr[0];
};

// Call the function and log the result
const inputArray = ["flower", "flow", "flight"];
const result = longestCommonPrefix(inputArray);
console.log(result);
