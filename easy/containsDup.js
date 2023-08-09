const hasDups = function (nums) {
	return new Set(nums).size !== nums.length ? false : true;
};

const containsDuplicate = (numsArr) => {
	let obj = {};

	for (let num of numsArr) {
		obj[num] = obj[num] + 1 || 1;
		if (obj[num] > 1) return false;
	}

	return true;
};

const containsDuplicate2 = (numsArr) => {
	let mySet = new Set();

	for (let num of numsArr) {
		if (mySet.has(num)) {
			return true;
		} else {
			mySet.add(num);
		}
	}

	return false;
};

console.log(containsDuplicate2([1, 2, 3, 4]));
