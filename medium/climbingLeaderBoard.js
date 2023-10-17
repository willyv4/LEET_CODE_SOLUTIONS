/*
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

// function climbingLeaderboard(ranked, player) {
// 	let left = 0; //ranked
// 	let right = player.length - 1; // player
// 	let result = [];
// 	let placement = 1;

// 	while (right >= 0) {
// 		if (player[right] > ranked[left]) {
// 			result.unshift(placement);
// 			left++;
// 			right--;
// 			placement++;
// 		} else {
// 			if (player[right] === ranked[left]) {
// 				result.unshift(placement);
// 				left++;
// 				right--;
// 				placement++;
// 			} else if (left === ranked.length - 1) {
// 				placement++;
// 				result.unshift(placement);
// 				right--;
// 			} else if (right === 0) {
// 				placement++;
// 				result.unshift(placement);
// 				right--;
// 			} else {
// 				left++;
// 			}
// 		}
// 	}

// 	return result;
// }

function climbingLeaderboard(ranked, player) {
	let result = [];
	let uniqueRanked = [...new Set(ranked)]; // Remove duplicate scores and keep the order

	let i = uniqueRanked.length - 1; // Start from the highest ranked player
	for (let score of player) {
		while (i >= 0 && score >= uniqueRanked[i]) {
			i--;
		}
		result.push(i + 2); // Rank is 1-based, so add 1 to i and then add 1 more for 0-based index
	}

	return result;
}

console.log(climbingLeaderboard([100, 90, 90, 80], [70, 80, 105])); // [4,3,1]
console.log(
	climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]) // [6,4,2,1]
);

// placement = 1
// let result = [1];
// 	l							                r
// [100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]

// placement = 2
// let result = [1];
// 	       l							    r
// [100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]

// placement = 2
// let result = [1];
// 	           l							r
// [100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]

// placement = 2
// let result = [1];
// 	           l							r
// [100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]

// placement = 2
// let result = [2,1];
// 	              l					   r
// [100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]

// placement = 3
// let result = [2,1];
// 	                  l					r
// [100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]

// placement = 4
// let result = [2,1];
// 	                      l			   r
// [100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]

// placement = 4
// let result = [4,2,1];
// 	                           l    r
// [100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]

// placement = 4
// let result = [4,2,1];
// 	                           l    r
// [100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]
