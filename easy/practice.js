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

// create combindIdx initilized at lenght minus 1 last point in arr

// while idx2 is less than or equal to 0 loop

// if currnum1 greater than currnum2
//    place currnum1 at end of num1 arr
//    decrement currnum1 idx

// otherwise

//	 place currnmu2 at the end of the arr
// 	 decrement currnum2 idx

// decrement num1 idx

const merge = (nums1, n1, nums2, n2) => {
	let idx1 = n1 - 1;
	let idx2 = n2 - 1;

	let combinedIdx = n1 + n2 - 1;

	while (idx2 >= 0) {
		if (nums1[idx1] >= nums2[idx2]) {
			nums1[combinedIdx] = nums1[idx1];
			idx1--;
		} else {
			nums1[combinedIdx] = nums2[idx2];
			idx2--;
		}
		combinedIdx--;
	}

	return nums1;
};
