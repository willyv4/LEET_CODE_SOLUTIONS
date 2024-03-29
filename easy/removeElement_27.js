/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

const removeElement = (nums, val) => {
	while (nums.includes(val)) {
		const index = nums.indexOf(val);
		if (index !== -1) nums.splice(index, 1);
	}

	return nums.length;
};

const removeElement2 = (nums, val) => {
	let i = 0;

	for (let j = 0; j < nums.length; j++) {
		if (nums[j] !== val) {
			nums[i] = nums[j];
			i++;
		}
	}

	return i;
};

function removeElement3(nums, val) {
	let count = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== val) {
			nums[count] = nums[i];
			count++;
		}
	}

	return count;
}
