// STEP 1 Understand the Problem
/**
 * What is the problem?
 * we need to check if each word is the same length
 * and if each word containes the same amount of letters
 *
 * for an example if input s = "skate" and input t = "kates"
 * output would be true
 *
 * another example if s = "banana" and t = "bandana"
 * output would be false
 *
 *
 */

// Step 2 Explor Concrete Example
/**
 * Simple example: s = "train" and t = "raint"
 *
 * more complex: "openfornow" "nowforopen"
 *
 * another example: s = "" and t = ""
 *
 * invalid example: s = "dark" d = "chord"
 */

// Solve it without code.
/**
 * take one string and create a place to store it's count
 *
 * check each individual letter and add a count to it
 *
 * example will and lwil
 *
 * {
 * 	w: 1
 * 	i: 1
 * 	l: 2
 * }
 *
 * next:
 *
 * {
 * 	l: 2
 * 	w: 1
 * 	i: 1
 * }
 *
 * check if each word has all letters
 * check if all letters have the same count
 */

const counter = (str) => {
	let obj = {};

	for (let el of str) obj[el] = obj[el] + 1 || 1;

	return obj;
};

const isAnagram = (s, t) => {
	if (s.length !== t.length) return false;

	const obj = counter(s);
	const obj2 = counter(t);

	for (let key in obj) if (obj[key] !== obj2[key]) return false;

	return true;
};
