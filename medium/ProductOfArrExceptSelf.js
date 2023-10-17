// My Solution passed 18/22 solutions

const productExceptSelf = (nums) => {
	let arr = [];
	let result = [];

	for (let i = 0; i < nums.length; i++) {
		let subArr = [];

		for (let j = 0; j < nums.length; j++) {
			subArr.push(nums[j]);

			if (subArr.length === nums.length) {
				arr.push(subArr);
			}
		}
		subArr.splice(i, 1);
	}

	arr.forEach((a) => {
		let sum = 1;
		a.map((num) => {
			return (sum *= num);
		});
		result.push(sum);
	});

	return result;
};

function productExceptSelf2(arr) {
	const object = {};
	let res = [];

	for (let i = 0; i < arr.length; i++) {
		let removed = arr.splice(0, 1);
		object[i] = arr.slice();
		arr.push(removed[0]);
	}

	for (let key in object) {
		res.push(sumArr(object[key]));
	}

	return res;
}

function sumArr(nums) {
	return nums.reduce((acc, curr) => {
		acc *= curr;
		return acc;
	}, 1);
}

// to study
const productExceptSelf1 = (nums) => {
	const result = [];
	const n = nums.length;

	// Calculate the product of all elements to the left of each index
	let leftProduct = 1;
	for (let i = 0; i < n; i++) {
		result[i] = leftProduct;
		leftProduct *= nums[i];
	}

	// Calculate the product of all elements to the right of each index
	let rightProduct = 1;
	for (let i = n - 1; i >= 0; i--) {
		result[i] *= rightProduct;
		rightProduct *= nums[i];
	}

	return result;
};
