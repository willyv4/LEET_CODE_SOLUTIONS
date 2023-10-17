/**
 * @param {number[]} nums
 * @return {number[]}
 */
// const productExceptSelf = (nums) => {
// 	const result = [];
// 	const n = nums.length;

// 	// Calculate the product of all elements to the left of each index
// 	let leftProduct = 1;
// 	for (let i = 0; i < n; i++) {
// 		result[i] = leftProduct;
// 		leftProduct *= nums[i];
// 		console.log(result);
// 	}

// 	// Calculate the product of all elements to the right of each index
// 	let rightProduct = 1;
// 	for (let i = n - 1; i >= 0; i--) {
// 		result[i] *= rightProduct;
// 		rightProduct *= nums[i];
// 		// console.log(result);
// 	}

// 	return result;
// };

/**
 * 
 * 
function sumArr(nums) {
	return nums.reduce((acc, curr) => {
		acc *= curr;
		return acc;
	}, 1);
}} arr 
 *  
 */

function productExceptSelf(arr) {
	let res = [];

	leftProduct = 1;
	for (let i = 0; i < arr.length; i++) {
		res[i] = leftProduct;
		leftProduct *= arr[i];
	}

	rightProduct = 1;
	for (let i = arr.length - 1; i >= 0; i--) {
		res[i] *= rightProduct;
		rightProduct *= arr[i];
	}

	return res;
}

console.log(productExceptSelf([1, 2, 3, 4]));
