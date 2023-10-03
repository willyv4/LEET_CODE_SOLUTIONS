const longSequence = (nums) => {
	if (nums.length === 0) return 0;

	const set = new Set(nums);
	let long = 0;

	for (let num of set) {
		if (!set.has(num - 1)) {
			let currNum = num;
			let streak = 1;

			while (set.has(currNum + 1)) {
				currNum++;
				streak++;
			}

			long = Math.max(long, streak);
		}
	}

	return long;
};

console.log(longSequence([2, 1, 200, 3, 4, 300]));
