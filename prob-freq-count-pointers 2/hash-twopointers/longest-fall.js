// add whatever parameters you deem

function longestFall(nums) {
	let deepestFall = 0;

	for (let i = 0; i < nums.length; i++) {
		if (!nums[i] > nums[i + 1]) continue;
		let streak = 1;
		while (nums[i] > nums[i + 1]) i++, streak++;
		deepestFall = Math.max(deepestFall, streak);
	}

	return deepestFall;
}

module.exports = { longestFall };
console.log(longestFall([5, 3, 1, 3, 0]));
