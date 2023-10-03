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

// function twoSum(nums, target) {
// 	const obj = {};

// 	for (let i = 0; i < nums.length; i++) {
// 		const complement = target - nums[i];

// 		if (complement in obj) return [obj[complement], i];

// 		obj[nums[i]] = i;
// 	}

// 	return [];
// }
