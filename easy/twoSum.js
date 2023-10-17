/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       number = nums[i] + nums[j];
//       if (number === target) {
//         return [i, j];
//       }
//     }
//   }
// }

function twoSum(nums, target) {
	// Create an empty object to store elements from the array and their indices
	const obj = {};

	// Iterate through the elements in the 'nums' array
	for (let i = 0; i < nums.length; i++) {
		// Calculate the complement needed to reach the target
		const complement = target - nums[i];

		// Check if the complement exists in the 'obj' object
		if (complement in obj) {
			// If the complement exists, return an array with the indices of the two numbers that sum to the target
			return [obj[complement], i];
		}

		// If the complement doesn't exist in 'obj', add the current element and its index to 'obj'
		obj[nums[i]] = i;
	}

	// If no valid pair is found, return an empty array to indicate failure
	return [];
}

// function twoSum(nums, target) {
// 	const obj = {};

// 	for (let i = 0; i < nums.length; i++) {
// 		const complement = target - nums[i];

// 		if (complement in obj) return [obj[complement], i];

// 		obj[nums[i]] = i;
// 	}

// 	return [];
// }
