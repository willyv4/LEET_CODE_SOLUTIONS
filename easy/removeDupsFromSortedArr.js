/**
 * Removes duplicate elements from a sorted integer array in-place, such that each unique element appears only once.
 * The relative order of the elements is maintained.
 *
 * @param {number[]} nums - The sorted array of integers.
 * @returns {number} - The number of unique elements after removing duplicates.
 * @LINK
 */

const removeDuplicates = function (nums) {
	for (let i = 0; i < nums.length; i++) {
		while (nums[i] === nums[i + 1]) {
			if (i !== -1) nums.splice(i, 1);
		}
	}
	return nums.length;
};

/**
 *
 * input nums arr
 * output returns lenght of arr
 *
 * example 1 [1,5,5,6,7,7] => [1,5,6,7] (4)
 *
 * example 2 [1,1,2] => [1,2] (2)
 *
 * exmaple 3
 *
 */

// loop over array
// let currnum
// let nextnum = currnum + 1

// if nextnum = currnum
// delete currnum
// else
// currnum++

// return nums.length

/**
 * I1:  currnum = 1
 * 		nextnum = 5
 *
 * I2: currnum = 5
 * 	   nextnum = 5
 *
 * 	   [1,_,5,6,7,7]
 *
 *
 *
 */

// function removeDups(arr) {
// 	let j = 0;

// 	while (i < arr.length - 1) arr[i] === arr[i + 1] ? arr.splice(i, 1) : i++;

// 	return arr.length;
// }

const removeDups = function (nums) {
	let j = 1; // Initialize a variable 'j' to keep track of the next position for non-duplicate elements.

	for (let i = 0; i < nums.length; i++) {
		// Loop through the input array 'nums'.
		if (nums[j - 1] !== nums[i]) {
			// Check if the current element 'nums[i]' is different from the previous non-duplicate element.
			nums[j] = nums[i]; // If yes, assign 'nums[i]' to the next position in the array, indicated by 'j'.
			j++; // Increment 'j' to move to the next position for the next non-duplicate element.
		}
	}

	return j; // 'j' represents the length of the modified array, containing only unique elements.
};

removeDups([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
