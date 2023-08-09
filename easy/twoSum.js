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
	const complementMap = {};

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		const complement = target - num;

		if (complementMap.hasOwnProperty(complement)) {
			return [complementMap[complement], i];
		}

		complementMap[num] = i;
	}

	return []; // Return an empty array if no solution is found
}

console.log(twoSum([1, 2, 3, 4, 5, 6], 3));
