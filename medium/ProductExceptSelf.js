function productExceptSelf(arr) {
	// Create a result array of the same length as the input array and fill it with 1 initially.
	let result = Array.from({ length: arr.length }).fill(1);

	// Initialize a prefix variable to 1 to keep track of the product of elements to the left of the current element.
	let prefix = 1;

	// Loop through the array from left to right.
	for (let i = 0; i < arr.length; i++) {
		// Set the result for the current index to the prefix.
		result[i] = prefix;

		// Update the prefix by multiplying it with the current element in the input array.
		prefix *= arr[i];
	}

	// Initialize a postfix variable to 1 to keep track of the product of elements to the right of the current element.
	let postfix = 1;

	// Loop through the array again, this time from right to left.
	for (let i = arr.length - 1; i >= 0; i--) {
		// Multiply the result for the current index by the postfix.
		result[i] *= postfix;

		// Update the postfix by multiplying it with the current element in the input array.
		postfix *= arr[i];
	}

	// Return the result array, which contains the product of all elements except the current element.
	return result;
}

// Example usage:
const arr = [1, 2, 3, 4];
const result = productExceptSelf(arr);
console.log(result); // Output: [24, 12, 8, 6]
