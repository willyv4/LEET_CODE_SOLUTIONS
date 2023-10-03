// to study
const longestConsecutive = (nums) => {
	// Define a function called longestConsecutive that takes an array nums as input
	if (nums.length === 0) return 0; // If the input array is empty, return 0 (there are no consecutive elements)

	const numSet = new Set(nums); // Create a Set called numSet from the input array nums
	let longestStreak = 0; // Initialize a variable longestStreak to store the length of the longest consecutive subsequence

	for (const num of numSet) {
		// Iterate through each unique number in the Set numSet
		if (!numSet.has(num - 1)) {
			// Check if the current number is the start of a streak (no smaller number exists in the set)
			let currentNum = num; // Initialize a variable currentNum to the current number
			let currentStreak = 1; // Initialize a variable currentStreak to 1 (counting the current number as part of the streak)

			while (numSet.has(currentNum + 1)) {
				// Continue the streak as long as the next consecutive number exists in the Set
				currentNum++; // Move to the next consecutive number
				currentStreak++; // Increment the streak length
			}

			longestStreak = Math.max(longestStreak, currentStreak); // Update the longestStreak with the maximum of the current streak and the longest streak found so far
		}
	}

	return longestStreak; // Return the length of the longest consecutive subsequence
};

const longSequence = (nums) => {
	if (nums.length === 0) return 0;

	const set = new Set(nums);
	let longestStreak = 0;

	for (let num of set) {
		if (!set.has(num - 1)) {
			let currentNum = num;
			let currentStreak = 1;

			while (set.has(currentNum + 1)) {
				currentNum++;
				currentStreak++;
			}

			longestStreak = Math.max(longestStreak, currentStreak);
		}
	}

	return longestStreak;
};

console.log(longSequence([2, 1, 200, 3, 4, 300]));
