const twoSum = (nums, target) => {
	for (let i = 0; i <= nums.length; i++) {
		for (let j = i + 1; j <= nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				console.log([i, j]);
				return [i, j];
			}
		}
	}
	console.log([]);
	return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 1, 1], 2));
console.log(twoSum([4, 3, 2], 2));
console.log(twoSum([], 3));
