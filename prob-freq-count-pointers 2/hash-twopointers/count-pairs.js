// add whatever parameters you deem necessary

/**
 * inputs an array of nums and a number
 * out put pairs that equal number
 *
 * epxplain in own words
 *
 * identify the number of pairs in the array that eqaul the target number
 *
 * params { nums, target }
 *
 * explore examples
 *
 * countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)
 * countPairs([10,4,8,2,6,0], 10) // 3 (2,8, 4,6, 10,0)
 * countPairs([4,6,2,7], 10) // 1 (4,6)
 * countPairs([1,2,3,4,5], 10) // 0
 * countPairs([1,2,3,4,5], -3) // 0
 *
 *
 * set of nums
 *
 *
 * loop over arr
 * 		match = target - num
 * 		if match = num continue
 *  	if match in set count++
 *
 *
 * params [4,6,2,7], 10
 * {4,6,2,7}
 * count = 0
 *
 * it 1 {
 * match num is 6
 *
 * does match = num - no
 * is match in set yes count .5
 * }
 *
 * it 2 {
 * match num is 4
 *
 * does match = num - no
 * is match in set yes count += .5
 * }
 *
 *
 */

function countPairs(nums, target) {
	const set = new Set(nums);
	let pairCount = 0;

	for (let num of nums) {
		const match = target - num;
		if (match === num) continue;
		if (set.has(match)) pairCount += 0.5;
	}

	return pairCount;
}

module.exports = { countPairs };

console.log(
	countPairs([3, 1, 5, 4, 2], 6), // 2 (1,5 and 2,4)
	countPairs([10, 4, 8, 2, 6, 0], 10), // 3 (2,8, 4,6, 10,0)
	countPairs([4, 6, 2, 7], 10), // 1 (4,6)
	countPairs([1, 2, 3, 4, 5], 10), // 0
	countPairs([1, 2, 3, 4, 5], -3) // 0);
);
