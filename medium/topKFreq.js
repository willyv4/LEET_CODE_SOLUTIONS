// inputs  arr of nums and k the most frequent elements
// output is an array of the most freqeunt elements according to k length

/**
 * Input:
 * nums = [1,1,1,1,2,2,3]
 * k = 2
 *
 * OutPut:
 * [1,2]
 *
 * we can see 1 occurs 4 times in the arr
 * and 2 occurs twice
 * (according to k): we are searching for the 2 numbers that occur most
 * frequently in the nums arr
 * so we would return 1 and 2 liks so [1,2]
 *
 * example 2
 *
 * Input:
 * nums [1]
 * k = 1
 *
 * output
 * [1]
 *
 */

/**
 * Approach:
 *
 * im thinking we can start with init
 * an object and looping over the nums arr
 *
 * if the curr num in the arr is not in the object
 * initialize the key as the number and the value as a count starting at one
 *
 * then within the same loop
 * we can take the length of K
 * and search through the object according to what one has the highest count
 * and push the first three keys with the highest value count
 */

/**
 * Be the Computer!
 *
 * [1,1,1,2,2,3]
 * k = 2
 *
 * iteration one: {
 *  object = {
 *  1: 1
 * }
 *
 * loop
 * 1
 * }
 *
 *
 *
 * iteration two: {
 *  object = {
 *  1: 2
 * }
 *
 * loop  {
 *  * [1,1]
 * 	     ^
 * }
 *
 *
 *
 * iteration three: {
 *  object = {
 *  1: 3
 * }
 *
 * loop  {
 *  * [1,1,1]
 * 	       ^
 * }
 *
 *
 *
 *
 * iteration four: {
 *  object = {
 *  1: 3
 *  2: 1
 * }
 *
 * loop  {
 *  * [1,1,1,2]
 * 	         ^
 * }
 *
 *
 *
 * iteration Five: {
 *  object = {
 *  1: 3
 *  2: 2
 * }
 *
 * loop  {
 *  * [1,1,1,2,2]
 * 	           ^
 * }
 *
 *
 *
 *  iteration six: {
 *    object = {
 *     1: 3
 *     2: 2
 * 	   3: 1
 *    }
 *
 *
 *     loop  {
 *       [1,1,1,2,2,3]
 *                  ^
 *      }
 * }
 *
 *
 * }
 *
 * loop over object keys {
 * 		if (obj value greater than obj[value + 1]) {
 *
 *      }
 *
 * }
 *
 */

// reminder always do the easiest way first
// work on optimization after
const arr = [1, 1, 1, 2, 2, 3];

function topKFrequent(nums, k) {
	let frequencyMap;

	return Object.keys(
		nums.reduce((acc, num) => {
			frequencyMap = acc;
			acc[num] = (acc[num] || 0) + 1;
			return acc;
		}, {})
	)
		.sort((a, b) => frequencyMap[b] - frequencyMap[a])
		.slice(0, k);
}

console.log(topKFrequent(arr, 2));
