// add whatever parameters you deem necessary
function averagePair(nums, avg) {
	let left = 0;
	let right = nums.length - 1;
	while (left < right) {
		let average = nums[left] + nums[right] / 2;
		if (average === avg) return true;
		average > avg ? right-- : left++;
	}
	return false;
}

module.exports = { averagePair };
