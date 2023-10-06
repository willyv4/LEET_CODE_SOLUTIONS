// add whatever parameters you deem necessary
/** 
 * 
 * [1,2,1
 * 
 * 6,3,1]
 * 
 * input arr of nums
 * output integer
 * 
 * if length is odd return -1 
 * 
 * left = 0
 * right length - 1
 * let leftSum = 0
 * let rightSum = 0
 * 
 * while (left <= arr.length / 2) {
 * 	leftSum += arr[left]
 * rightSum += arr[right]
 * left++
 * right--
 * }
 * 
 * return (leftSum > right) leftSum + rightSum else rightSum + leftSum

*/

function pivotIndex(nums) {
	// Check if the input array is empty, and if so, return -1 since there's no valid pivot index.
	if (nums.length === 0) {
		return -1;
	}

	// Calculate the total sum of all elements in the input array using the reduce method.
	let totalSum = nums.reduce((acc, num) => acc + num, 0);

	// Initialize a variable to keep track of the sum of elements on the left.
	let leftSum = 0;

	// Iterate through the elements of the input array.
	for (let i = 0; i < nums.length; i++) {
		// Subtract the current element from the total sum to get the remaining sum on the right.
		totalSum -= nums[i];

		// Check if the sum of elements on the left is equal to the remaining sum on the right.
		if (leftSum === totalSum) {
			// If they are equal, return the current index as the pivot index.
			return i;
		}

		// Add the current element to the sum of elements on the left.
		leftSum += nums[i];
	}

	// If no valid pivot index is found, return -1.
	return -1;
}

// Test cases
console.log(pivotIndex([1, 2, 1, 6, 3, 1])); // Output: 3
console.log(pivotIndex([5, 2, 7])); // Output: -1
console.log(pivotIndex([-1, 3, -3, 2])); // Output: 1

console.log(pivotIndex([1, 2, 1, 6, 3, 1]));
