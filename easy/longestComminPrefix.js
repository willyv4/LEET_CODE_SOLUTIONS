/**
 * 
 * Write a function to find the longest common prefix string amongst an array of strings.

   If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

inputs: arr of strings
output is string

commonPrefix = "fl"
curLetter = arr[0][0]



 */

const longestCommonPrefix = function (strs) {
	let result = strs[0];
	for (let i = 0; i < strs.length; i++) {
		while (strs[i].indexOf(result) !== 0) {
			result = result.substring(0, result.length - 1);
			if (result === "") return "";
		}
	}

	return result;
};

// Define a function called longestCommonPrefix that takes an array of strings (strs) as input.
const longestCommonPrefix1 = function (strs) {
	// Initialize a variable result with the first string in the array.
	let result = strs[0];

	// Loop through each string in the array.
	for (let i = 0; i < strs.length; i++) {
		// While the current string does not start with the current result string:
		while (strs[i].indexOf(result) !== 0) {
			// Reduce the length of the result string by 1 character.
			result = result.substring(0, result.length - 1);

			// If the result string becomes empty, there is no common prefix, so return an empty string.
			if (result === "") return "";
		}
	}

	// After looping through all strings, return the longest common prefix found.
	return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
