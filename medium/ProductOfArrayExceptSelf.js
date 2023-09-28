/**
 *
 * Input: arr of nums example: [1,2,3,4]
 * Output: [24,12,8,6]
 *
 * explanation:
 *
 * [_, 2,3,4] = 24
 * [1,_,3,4] = 12
 * [1,2,_,4] = 8
 * [1,2,3,_] = 6
 *
 * let arr = []
 * left pointer 0
 * right pointer length -1
 */

const productExceptSelf = (nums) => {
	let obj = {};
	let arr = [];
	let count = 0;

	for (let i = 0; i < nums.length; i++) {
		if (count === i) nums.splice(0, i);
		i -= 1;
	}

	console.log(nums);
};

console.log(productExceptSelf([1, 2, 3, 4]));
