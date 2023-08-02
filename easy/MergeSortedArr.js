/**
 * Merge two sorted arrays in-place.
 *
 * @param {number[]} n1 - The first sorted array with extra space at the end.
 * @param {number} m - The number of elements in n1 (excluding the extra space).
 * @param {number[]} n2 - The second sorted array.
 * @param {number} n - The number of elements in n2.
 * @returns {number[]} - The merged and sorted array.
 *
 * @example
 * // Example 1:
 * const n1 = [1,2,3,0,0,0];
 * const m = 3;
 * const n2 = [2,5,6];
 * const n = 3;
 * merge(n1, m, n2, n);
 * // Output: [1,2,2,3,5,6]
 * // Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
 * // The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from n1.
 *
 * @example
 * // Example 2:
 * const n1 = [1];
 * const m = 1;
 * const n2 = [];
 * const n = 0;
 * merge(n1, m, n2, n);
 * // Output: [1]
 * // Explanation: The arrays we are merging are [1] and [].
 * // The result of the merge is [1].
 */

/**
 * @EXPLANATION
 * calculate difference of n1 (length) and m
 * n1 length from difference
 * iterate through n2 and add each num to n1
 * sort through n1 from least to greatest
 */

function merge(n1, m, n2, n) {
	n1.splice(n1.length - (n1.length - m));
	n2.map((num) => n1.push(num));
	return n1.sort((a, b) => a - b);
}

// step 1: understand the problem

/**
 * inputs nums1 (array of numbers) nums2 (array of numbers)
 * n1length (length of nums1) n2lenght (lenght of nums2)
 *
 * output should be nums1 as a sorted array
 *
 * combine num2 to nums1 and return nums1 as a sorted array
 */

// step 2: explore examples

/**
 * nums1 = [1,2,3,0,0,0] , m = 3, nums2 = [2,5,6], n = 3 output: [1,2,2,3,5,6]
 *
 * nums1 = [1], m = 1, nums2 = [], n = 0 Output: [1]
 *
 * nums1 = [0], m = 0, nums2 = [1], n = 1 Output: [1]
 *
 */

/**
 * create a pointer
 *
 * loop over each arr according to length return
 *
 * create a while loop that run until nums1 is the lenght of m + n combined
 *
 * if currnum2 is greater than currnum1 and less than next num1 place num there
 */

// create index pointers initiliazed at length - 1

// create combindIdx initilized at length minus 1 last point in arr

// while idx2 is less than or equal to 0 - loop

// if currnum1 greater than currnum2
//    place currnum1 at end of num1 arr
//    decrement currnum1 idx

// otherwise

//	 place currnmu2 at the end of the arr
// 	 decrement currnum2 idx

// decrement num1 idx

// better solution

function merge(nums1, n1, nums2, n2) {
	let i1 = n1 - 1;
	let i2 = n2 - 1;

	let currIdx = n1 + n2 - 1;

	while (i2 >= 0) {
		nums1[i1] >= nums2[i2]
			? ((nums1[currIdx] = nums1[i1]), i1--)
			: ((nums1[currIdx] = nums2[i2]), i2--);

		currIdx--;
	}

	return nums1;
}
