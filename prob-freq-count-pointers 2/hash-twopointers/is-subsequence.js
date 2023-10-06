/**
 *
 * inputs
 * strings
 *
 * output boolean
 *
 *
 * check wether the first string is a subsqequence in the second string
 * (ORDER MATTERS)
 * a subsequence in this case is strOne contains the same amount of letters as strTwo in the same order as strOne
 *
 * isSubsequence('sing', 'sting'); // true
 * isSubsequence('abc', 'abracadabra'); // true
 * isSubsequence('abc', 'acb'); // false
 *
 * ideas= 2
 *
 * create a hash pf strOne
 *
 *
 * set of (strOne)
 * loop through strTwo {
 *
 * if (!set num) splice
 *
 *
 *
 *
 * loop over strOne
 * if (not match ) false
 *
 *
 * return true
 *
 *
 *
 *
 *
 *
 */

// const isSubsequence = (strOne, strTwo) => {
// 	let objOne = {};
// 	let arrTwo = [];

// 	for (let s of strOne) objOne[s] = (objOne[s] || 0) + 1;

// 	for (let s of strTwo) {
// 		if (objOne[s] > 0) {
// 			arrTwo.push(s);
// 			objOne[s]--;
// 		}
// 	}

// 	const arr = arrTwo.join("");

// 	for (let i = 0; i < strOne.length; i++) {
// 		if (strOne[i] !== arr[i]) return false;
// 	}

// 	return true;
// };

function isSubsequence(word, letters) {
	if (word.length < 1 && letters.length < 1) return true;
	let wordIndex = 0;
	for (let i = 0; i < letters.length; i++) {
		if (word[wordIndex] === letters[i]) wordIndex++;
		if (wordIndex === word.length) return true;
	}

	return false;
}

console.log(
	// isSubsequence("hello", "hello world"), // true
	// isSubsequence("sing", "sting"), // true
	// isSubsequence("abc", "abracadabra"), // true
	// isSubsequence("abc", "acb"), // false (order matters)
	isSubsequence("ab", "baab")
);

module.exports = { isSubsequence };
